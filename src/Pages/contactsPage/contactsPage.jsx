import { useState } from 'react';
import H1 from '../../Components/H1/H1';
import './contactsPage.css';
import Phone from '../../Components/Phone/Phone';
import MailBox from '../../Components/MailBox';
import MapBox from '../../Components/MapBox';
import TimeBox from '../../Components/TimeBox';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';

export default function ContactsPage() {
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		phone: '',
		mail: '',
		text: '',
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		setErrors((prev) => ({
			...prev,
			[name]: false,
		}));
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = true;
		if (!formData.mail.trim() || !formData.mail.includes('@')) newErrors.mail = true;
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setSubmitted(false);
		} else {
			console.log('Відправлені дані:', formData);
			setSubmitted(true);
			setFormData({
				name: '',
				surname: '',
				phone: '',
				mail: '',
				text: '',
			});
			setErrors({});
			setTimeout(() => setSubmitted(false), 4000);
		}
	};

	const getInputClass = (field, base) =>
		`${base} ${errors[field] ? 'errorInput' : ''}`.trim();

	return (
		<div className='contactsPageBlock'>
			<H1 text={'Контакти'} />
			<div className='contactsBlock'>
				<div className='contactsSubBlock'>
					<MapBox adress={'Україна, Вінницька область,Вінниця, Хмельницьке шосе, 122'} />
					<TimeBox day={'Пн-Пт'} time={'9-00 - 18-00'} />
					<MailBox email={'shop@ukrsemena.com'} />
				</div>
				<hr />
				<p className='contactsBlockText'>Відділ продажу та агрономічного супроводу</p>
				<p className='contactsBlockTextBasic'>
					Якщо Вам потрібна допомога при оформленні замовлення, консультація по використанню товарів,
					є питання що до Ваших замовлень звертайтеся сюди:
				</p>
				<div className='contactsSubBlock'>
					<TimeBox day={'Пн-Нд '} time={'9-00 - 17-00'} />
					<Phone numberPhone={'(050) 42-42-820'} text={'(050) 42-42-824'} />
					<Phone numberPhone={'(097) 182-51-41'} text={'(098) 123-70-00'} />
				</div>
			</div>
			<H1 text={'Напишіть нам'} />
			<form className='dataAccountForm' onSubmit={handleSubmit} noValidate>
				<p className='contactsBlockTextBasic'>
					Введіть ваші контактні дані і текст повідомлення, якщо у вас виникли питання або пропозиції, і ми найближчим часом відповімо вам.
				</p>
				<div className='formGroup'>
					<input
						type='text'
						name='name'
						placeholder='Ім’я *'
						className={getInputClass('name', 'name')}
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className='formGroup'>
					<input
						type='text'
						name='surname'
						placeholder='Прізвище'
						className='surname'
						value={formData.surname}
						onChange={handleChange}
					/>
				</div>
				<div className='formGroup'>
					<input
						type='text'
						name='phone'
						placeholder='Телефон'
						className='phone'
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>
				<div className='formGroup'>
					<input
						type='text'
						name='mail'
						placeholder='E-mail *'
						className={getInputClass('mail', 'mail')}
						value={formData.mail}
						onChange={handleChange}
					/>
				</div>
				<div className='formGroup'>
					<textarea
						name='text'
						placeholder='Ваше повідомлення'
						className='address'
						value={formData.text}
						onChange={handleChange}
					/>
				</div>
				{submitted ? (
					<p className='success'>✅ Повідомлення надіслано!</p>
				) : (
					<ButtonBody type='submit' link='' text='Відправити' />
				)}
			</form>
		</div>
	);
}
