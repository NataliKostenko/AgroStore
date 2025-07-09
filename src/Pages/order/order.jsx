import { useState } from 'react';
import H1 from '../../Components/H1/H1';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';
import './order.css';
import OrderCartItem from '../../Components/OrderCartItem';
import { useCartContext } from '../../Contexts/shoppingCartContext';

export default function Order() {
	const cart = useCartContext();

	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		phone: '',
		mail: '',
		comment: '',
		region: '',
		city: '',
		office: '',
		index: '',
		payment: 'option2',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'radio' ? value : value;

		setFormData((prev) => ({
			...prev,
			[name]: val,
		}));

		setErrors((prev) => ({
			...prev,
			[name]: false,
		}));
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = true;
		if (!formData.phone.trim()) newErrors.phone = true;
		if (!formData.mail.includes('@')) newErrors.mail = true;
		if (!formData.region) newErrors.region = true;
		if (!formData.city) newErrors.city = true;
		if (!formData.office) newErrors.office = true;
		if (!formData.index.trim()) newErrors.index = true;

		return newErrors;
	};

	const getInputClass = (field) => (errors[field] ? 'errorInput' : '');

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			console.log('ЗАМОВЛЕННЯ:', formData);
			cart.clear();
		}
	};
	return (
		<div className='orderPage'>
			<H1 text='Оформлення замовлення' />
			<div className='orderWrap'>
				<div className='orderForm'>
					<form className='dataAccountForm' onSubmit={handleSubmit} noValidate>
						<h3>Ваші контакти</h3>
						<div>
							<input
								type='text'
								name='name'
								placeholder='Ім’я *'
								className={`name ${getInputClass('name')}`}
								value={formData.name}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='surname'
								placeholder='Прізвище'
								className='name'
								value={formData.surname}
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type='text'
								name='phone'
								placeholder='Телефон *'
								className={`name ${getInputClass('phone')}`}
								value={formData.phone}
								onChange={handleChange}
							/>
							<input
								type='text'
								name='mail'
								placeholder='E-mail *'
								className={`mail ${getInputClass('mail')}`}
								value={formData.mail}
								onChange={handleChange}
							/>
						</div>
						<textarea
							name='comment'
							placeholder='Коментар'
							value={formData.comment}
							onChange={handleChange}
						/>
						<hr />
						<h3>Доставка</h3>
						<div>
							<select
								name='region'
								className={`productPanelSelect name select ${getInputClass('region')}`}
								value={formData.region}
								onChange={handleChange}
							>
								<option value=''>Область *</option>
								<option value='Київська'>Київська</option>
								<option value='Одеська'>Одеська</option>
								<option value='Львівська'>Львівська</option>
							</select>
							<select
								name='city'
								className={`productPanelSelect name select ${getInputClass('city')}`}
								value={formData.city}
								onChange={handleChange}
							>
								<option value=''>Місто *</option>
								<option value='Київ'>Київ</option>
								<option value='Одеса'>Одеса</option>
								<option value='Львів'>Львів</option>
							</select>
						</div>
						<div>
							<select
								name='office'
								className={`productPanelSelect name select ${getInputClass('office')}`}
								value={formData.office}
								onChange={handleChange}
							>
								<option value=''>Відділення *</option>
								<option value='30'>30</option>
								<option value='401'>401</option>
								<option value='46'>46</option>
							</select>
							<input
								type='text'
								name='index'
								placeholder='Поштовий індекс *'
								className={`name ${getInputClass('index')}`}
								value={formData.index}
								onChange={handleChange}
							/>
						</div>
						<hr />
						<div className='selectPay'>
							<h3>Оплата:</h3>
							<label>
								<input
									type='radio'
									name='payment'
									value='option1'
									checked={formData.payment === 'option1'}
									onChange={handleChange}
								/>
								Готівка
							</label>
							<label>
								<input
									type='radio'
									name='payment'
									value='option2'
									checked={formData.payment === 'option2'}
									onChange={handleChange}
								/>
								Оплата карткою
							</label>
							<label>
								<input
									type='radio'
									name='payment'
									value='option3'
									checked={formData.payment === 'option3'}
									onChange={handleChange}
								/>
								Оплата карткою онлайн
							</label>
						</div>
					</form>
				</div>
				<div className='orderCart'>
					{cart.items.map((item, index) => (
						<OrderCartItem key={index} product={item} />
					))}
					<div className='totalOrder'>
						<p>Разом товарів: <span>{cart.getTotalQuantity()}</span></p>
						<p>До сплати: <span>{cart.getTotalAmount()} грн.</span></p>
					</div>
					<ButtonBody
						link=''
						type='button'
						text='Підтвердити замовлення'
						onClick={(e) => {
							e.preventDefault();
							const validationErrors = validate();
							if (Object.keys(validationErrors).length > 0) {
								setErrors(validationErrors);
								return;
							}
							console.log('ЗАМОВЛЕННЯ ПІДТВЕРДЖЕНО:', formData);
							cart.clear();
							window.location.href = '/orderFinal';
						}}
					/>
				</div>
			</div>
		</div>
	);
}
