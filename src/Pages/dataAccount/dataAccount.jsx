import H1 from '../../H1/h1'
import ButtonBody from '../../buttonBody/buttonBody'
import './dataAccount.css'

export default function DataAccount() {
	return <div className='dataAccountPage'>
		<H1 text={'Особисті дані'} />


		<form className='dataAccountForm'>
			<input type='text' name='name' placeholder='Ім’я' className='name'></input>
			<input type='text' name='surname' placeholder='Прізвище' className='surname'></input>
			<input type='text' name='phone' placeholder='Телефон' className='phone'></input>
			<input type='text' name='mail' placeholder='E-mail' className='mail'></input>
			<input type='text' name='address' placeholder='Адреса для доставки' className='address'></input>
			<ButtonBody type={'submit'} link={''} text={'Зберегти'} />
		</form>
	</div>

}