import './footerInfo.css';
import MenuItem from '../Menu/MenuItem';
import Phone from '../Phone/Phone';
import MailBox from '../MailBox';

export default function FooterInfo() {
	const items = [{
		name: 'Про компанію',
		link: './moreAboutCompany'
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
		link: './protection'
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