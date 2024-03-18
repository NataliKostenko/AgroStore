import { useState } from 'react';
import H1 from '../../H1/h1';
import ButtonBody from '../../buttonBody/buttonBody';
import './registrationPage.css';


export default function RegistrationPage() {
	const [checked, setChecked] = useState(false);
	return <div className='registrationPage'>
		<H1 text={'Реєстрація'} />
		<p className='registrationPageText'>
			Увійдіть, щоб використовувати всі можливості особистого кабінету:
			відстеження замовлень, налаштування передплати, зв'язки з соціальними
			мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті дані клієнтів.
			Контактна інформація буде використана тільки для оформлення замовлень та зручнішої роботи з сайтом
		</p>

		<form className='registrationForm'>
			<input type='text' name='name' placeholder='Ім’я' className='name'></input>
			<input type='text' name='surname' placeholder='Прізвище' className='surname'></input>
			<input type='text' name='phone' placeholder='Телефон' className='phone'></input>
			<input type='text' name='mail' placeholder='E-mail' className='mail'></input>
			<input type='password' name='password' placeholder='Пароль' className='password'></input>
			<input type='password' name='password' placeholder='Підтвердити пароль' className='password'></input>

			<p className='permission'>
				<input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} id='permission' />
				<label htmlFor='permission' >я згоден на обробку і захист <span>персональних даних</span></label></p>
			<ButtonBody type={'submit'} link={''} text={'Зареєструватися'} />
		</form>
	</div>
}