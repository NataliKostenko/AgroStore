import { useState } from 'react';
import H1 from '../../Components/H1/H1';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';
import './dataAccount.css';

export default function DataAccount() {
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		phone: '',
		mail: '',
		address: '',
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
		if (!formData.address.trim()) newErrors.address = true;
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setSubmitted(false);
		} else {
			console.log('Збережені дані:', formData);
			setSubmitted(true);
			setFormData({
				name: '',
				surname: '',
				phone: '',
				mail: '',
				address: '',
			});
			setErrors({});
			setTimeout(() => setSubmitted(false), 3000);
		}
	};
	const getInputClass = (field, base) =>
		`${base} ${errors[field] ? 'errorInput' : ''}`.trim();

	return (
		<div className='dataAccountPage'>
			<H1 text={'Особисті дані'} />
			<form className='dataAccountForm' onSubmit={handleSubmit} noValidate>
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
					<input
						type='text'
						name='address'
						placeholder='Адреса для доставки *'
						className={getInputClass('address', 'address')}
						value={formData.address}
						onChange={handleChange}
					/>
				</div>
				{submitted ? (
					<p className='success'>✅ Дані успішно збережено!</p>
				) : (
					<ButtonBody type='submit' text='Зберегти' width='100%' />
				)}
			</form>
		</div>
	);
}
