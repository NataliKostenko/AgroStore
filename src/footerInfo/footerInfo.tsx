import './footerInfo.css'
import MenuItem from '../menu/menuItem'
import Phone from '../phone/phone';
import MailBox from '../mailBox/mailBox'

export default function FooterInfo() {
	const items = [{
		name: 'Про компанію',
		link: './about'
	},
	{
		name: 'Оплата і доставка',
		link: './pay'
	},
	{
		name: 'Партнери',
		link: './partners'
	}];
	const items2 = [{
		name: 'Каталог продукції',
		link: './catalog'
	},
	{
		name: 'Засоби захисту рослин',
		link: './save'
	},
	{
		name: 'Насіння',
		link: './seeds'
	},
	{
		name: 'Добрива',
		link: './fertilisers'
	},
	{
		name: 'Агроному в поміч',
		link: './help'
	}];


	return (<div className='menuFooter'>
		<div className='infoMenu'>
			<h6 className='title'>Інформація</h6>
			<ul className='menuList'>
				{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
			</ul>
		</div>
		<div className='infoMenu'>
			<h6 className='title'>Товари</h6>
			<ul className='menuList'>
				{items2.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
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