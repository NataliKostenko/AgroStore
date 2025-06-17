import H1 from '../../Components/H1/H1';
import './contactsPage.css';
import Phone from '../../Components/Phone/Phone';
import MailBox from '../../Components/MailBox/MailBox';
import MapBox from '../../Components/MapBox/MapBox';
import TimeBox from '../../Components/TimeBox/TimeBox';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';

export default function ContactsPage() {
	return <div className='contactsPageBlock'>
		<H1 text={'Контакти'} />
		<div className='contactsBlock'>
			<div className='contactsSubBlock'>
				<MapBox adress={'Україна, Вінницька область,Вінниця, Хмельницьке шосе, 122'} />
				<TimeBox day={'Пн-Пт'} time={'9-00 - 18-00'} />
				<MailBox email={'shop@ukrsemena.com'} />
			</div>
			<hr></hr>
			<p className='contactsBlockText'>
				Відділ продажу та агрономічного супроводу
			</p>
			<p className='contactsBlockTextBasic'>
				Якщо Вам потрібна допомога при оформленні замовлення,
				консультація по використанню товарів, є питання що до
				Ваших замовлень звертайтеся сюди:
			</p>
			<div className='contactsSubBlock'>
				<TimeBox day={'Пн-Нд '} time={'9-00 - 17-00'} />
				<Phone numberPhone={'(050) 42-42-820'} text={'(050) 42-42-824'} />
				<Phone numberPhone={'(097) 182-51-41'} text={'(098) 123-70-00'} />
			</div>
		</div>
		<H1 text={'Напишіть нам'} />
		<form className='dataAccountForm'>
			<p className='contactsBlockTextBasic'>Введіть ваші контактні дані і текст повідомлення, якщо у вас виникли питання або пропозиції, і ми найближчим часом відповімо вам.</p>
			<input type='text' name='name' placeholder='Ім’я  &#42;' className='name' required></input>
			<input type='text' name='surname' placeholder='Прізвище' className='surname'></input>
			<input type='text' name='phone' placeholder='Телефон' className='phone'></input>
			<input type='text' name='mail' placeholder='E-mail  &#42;' className='mail' required></input>
			<textarea name='text' placeholder='Ваше повідомлення' className='address'></textarea>
			<ButtonBody type='submit' link='' text='Відправити' width='100%' />
		</form>
	</div >

}
