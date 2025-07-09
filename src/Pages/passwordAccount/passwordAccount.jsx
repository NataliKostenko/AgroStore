import { useState } from 'react';
import H1 from '../../Components/H1/H1';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';
import './passwordAccount.css';

export default function PasswordAccount() {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const [showPassword, setShowPassword] = useState({
		oldPassword: false,
		newPassword: false,
		confirmPassword: false,
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const toggleVisibility = (field) => {
		setShowPassword((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

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
		if (!formData.oldPassword.trim()) newErrors.oldPassword = true;
		if (!formData.newPassword.trim()) newErrors.newPassword = true;
		if (formData.newPassword !== formData.confirmPassword)
			newErrors.confirmPassword = true;
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setSubmitted(false);
		} else {
			console.log('Пароль змінено:', formData);
			setSubmitted(true);
			setFormData({
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
			});
			setErrors({});
			setTimeout(() => setSubmitted(false), 3000);
		}
	};

	const getInputClass = (field) => (errors[field] ? 'errorInput' : '');

	return (
		<div className='passwordChangePage'>
			<H1 text={'Змінити пароль'} />
			<div className='passwordChangeBlock'>
				<form className='passwordChange' onSubmit={handleSubmit} noValidate>
					{['oldPassword', 'newPassword', 'confirmPassword'].map((field, i) => (
						<div className='formGroup' key={i}>
							<div className="passwordWrapper">
								<input
									type={showPassword[field] ? 'text' : 'password'}
									name={field}
									placeholder="Пароль"
									value={formData[field]}
									onChange={handleChange}
									className={getInputClass(field)}
								/>
								<button
									type="button"
									className="togglePassword"
									onClick={() => toggleVisibility(field)}
									aria-label="Показати/сховати пароль"
								>
									{showPassword[field] ? (
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M12 5c-7.633 0-10 7-10 7s2.367 7 10 7 10-7 10-7-2.367-7-10-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
										</svg>
									) : (

										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M1 1l22 22" />
											<path d="M17.94 17.94A10.97 10.97 0 0112 19c-5 0-9.27-3.11-11-7 1.06-2.38 2.9-4.42 5.25-5.63M10.6 5.23A10.97 10.97 0 0112 5c5 0 9.27 3.11 11 7a10.94 10.94 0 01-4.24 4.76M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									)}
								</button>
							</div>
						</div>
					))}
					{submitted ? (
						<p className='success'>✅ Пароль успішно змінено!</p>
					) : (
						<ButtonBody type='submit' text='Змінити пароль' width='100%' />
					)}
				</form>
			</div>
		</div>
	);
}
