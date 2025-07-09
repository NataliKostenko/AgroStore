import { useState } from 'react';
import './feedback.css';
import ButtonBody from '../ButtonBody/ButtonBody';

export default function Feedback() {
	const [formData, setFormData] = useState({
		name: '',
		mail: '',
		feedback: '',
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
			console.log('Відгук надіслано:', formData);
			setSubmitted(true);
			setFormData({
				name: '',
				mail: '',
				feedback: '',
			});
			setErrors({});
			setTimeout(() => setSubmitted(false), 3000);
		}
	};

	const getInputClass = (field, base) =>
		`${base} ${errors[field] ? 'errorInput' : ''}`.trim();

	return (
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
					name='mail'
					placeholder='E-mail *'
					className={getInputClass('mail', 'mail')}
					value={formData.mail}
					onChange={handleChange}
				/>
			</div>
			<div className='formGroup'>
				<textarea
					name='feedback'
					placeholder='Відгук'
					className='address'
					value={formData.feedback}
					onChange={handleChange}
				/>
			</div>
			{submitted ? (
				<p className='success'>✅ Дякуємо за відгук!</p>
			) : (
				<ButtonBody type='submit' text='Додати відгук' width='100%' />
			)}
		</form>
	);
}
