import MenuItem from './MenuItem';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function Menu() {

	const items = [{
		name: 'Головна',
		link: './'
	},

	{
		name: 'Про нас',
		link: './about'
	},
	{
		name: 'Каталог продукції',
		link: './catalog'
	},
	{
		name: 'Оплата і доставка',
		link: './pay'
	},
	{
		name: 'Партнери',
		link: './partners'
	},
	{
		name: 'Новини',
		link: './news'
	},
	{
		name: 'Контакти',
		link: './contacts'
	},
	{
		name: 'Вхід',
		link: './account'
	},
	{
		name: 'Реестрація',
		link: './registration'
	}];

	const itemsS = [{
		name: 'Вхід',
		link: './account'
	},
	{
		name: 'Реестрація',
		link: './registration'
	}];

	const itemsS2 = [{
		name: 'Головна',
		link: './'
	},

	{
		name: 'Про нас',
		link: './about'
	},
	{
		name: 'Каталог продукції',
		link: './catalog'
	},
	{
		name: 'Оплата і доставка',
		link: './pay'
	},
	{
		name: 'Партнери',
		link: './partners'
	},
	{
		name: 'Новини',
		link: './news'
	},
	{
		name: 'Контакти',
		link: './contacts'
	}
	];

	const [isOpen, setOpen] = useState(false);


	const [isActive, setActive] = useState("false");

	const toggleClass = () => {
		setActive(!isActive);
		setOpen(!isOpen);
	};

	return <>
		<div className='menu'>
			<ul className='menuList'>
				{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
			</ul>
		</div>
		<div className='menuSmall'>
			<ul className='menuList'>
				{itemsS.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
				<button onClick={toggleClass} style={{ color: '#84BE51', background: '#1E6140', border: 'none' }}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</button>
			</ul>
			<div className={isActive ? "hidden" : "show"}>
				<div className='menuSmall' onClick={toggleClass}>
					<ul className='menuList menuList2'>
						{itemsS2.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
					</ul>
				</div>
			</div>
		</div >
	</>
}