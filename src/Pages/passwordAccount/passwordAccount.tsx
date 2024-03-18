import H1 from '../../H1/h1';
import ButtonBody from '../../buttonBody/buttonBody';
import PersonalAccountPanel from '../../personalAccountPanel/personalAccountPanel';

import './passwordAccount.css'

export default function PasswordAccont() {
	return <div className='passwordChangePage'>
		<H1 text={'Змінити пароль'} />
		<div className='passwordChangeBlock'>
			<PersonalAccountPanel />
			<form className='passwordChange'>
				<input type='password' placeholder='Старий пароль' />
				<input type='password' placeholder='Новий пароль' />
				<input type='password' placeholder='Підтвердити пароль' />
				<ButtonBody link={'#'} text={'Змінити пароль'} type={'submit'} />
			</form>
		</div>
	</div>
}