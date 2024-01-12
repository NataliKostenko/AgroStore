import './footerInfo.css'
import Item from '../menu/itemMenu'
import Phone from '../phone/phone';
import MailBox from '../mailBox/mailBox'

export default function FooterInfo() {
	const items = ['Про компанію', 'Оплата і доставка', 'Партнери'];
	const items2 = ['Каталог продукції', 'Засоби захисту рослин', 'Насіння', 'Добрива', 'Агроному в поміч'];
	const items3 = [<Phone />, <MailBox />]
	return (<div className='menuFooter'>
		<div className='infoMenu'>
			<h6 className='title'>Інформація</h6>
			<ul className='menuList'>
				{items.map((item, index) => <Item item={item} key={index} />)}
			</ul>
		</div>
		<div className='infoMenu'>
			<h6 className='title'>Товари</h6>
			<ul className='menuList'>
				{items2.map((item, index) => <Item item={item} key={index} />)}
			</ul>
		</div>
		<div className='infoMenu'>
			<h6 className='title'>Контакти</h6>
			<ul className='menuList'>
				{items3.map((item, index) => <Item item={item} key={index} />)}

			</ul>
		</div>
	</div>
	)
}