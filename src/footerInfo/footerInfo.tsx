import './footerInfo.css'
import Item from '../menu/itemMenu'
import Phone from '../phone/phone';
import MailBox from '../mailBox/mailBox'

export default function FooterInfo() {
	const items = ['Про компанію', 'Оплата і доставка', 'Партнери'];
	const items2 = ['Каталог продукції', 'Засоби захисту рослин', 'Насіння', 'Добрива', 'Агроному в поміч'];
	return (<div className='menuFooter'>
		<div className='infoMenu'>
			<h6 className='title'>Інформація</h6>
			<ul className='menuList'>
				{items.map((item, index) => <Item itemName={item} key={index} link={''} />)}
			</ul>
		</div>
		<div className='infoMenu'>
			<h6 className='title'>Товари</h6>
			<ul className='menuList'>
				{items2.map((item, index) => <Item itemName={item} key={index} link={''} />)}
			</ul>
		</div>
		<div className='infoMenu'>
			<h6 className='title'>Контакти</h6>
			<ul className='menuList'>
				<Phone numberPhone={'+38(097)254-333'} text={'Замовити дзвінок'} />
				<MailBox email={'nnn@mm.com'} />
			</ul>
		</div>
	</div>
	)
}