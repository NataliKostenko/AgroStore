import './feedback.css';
import ButtonBody from '../ButtonBody/ButtonBody';

export default function Feedback() {

	return <form className='dataAccountForm'>
		<input type='text' name='name' placeholder='Ім’я' className='name' />
		<input type='text' name='mail' placeholder='E-mail' className='mail' />
		<textarea name='feedback' placeholder='Відгук' />
		<ButtonBody type='submit' link='' text='Додати відгук' />
	</form>
}

