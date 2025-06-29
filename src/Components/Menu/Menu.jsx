import MenuItem from './MenuItem';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import Circle from '../Circle/Circle';
import Amount from '../Amount/Amount';
import FavoriteIcon from '../Icons/FavoriteIcon';
import ScalesIcon from '../Icons/ScalesIcon';
import CartIcon from '../Icons/CartIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import { useFavouritContext } from '../../Contexts/favouritesContext';
import { useCompareContext } from '../../Contexts/compareContext';
import Search from '../../Components/Input/Search';
import PhoneS from '../Phone/PhoneS';

export default function Menu() {
	const cart = useCartContext();
	const favourit = useFavouritContext();
	const compare = useCompareContext();

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
				<div className='menuS' onClick={toggleClass}>
					<div className='menuSection'>
						<img src='/LogoS.png' alt='logo'></img>
						<Link to={'/compare'}>
							<Circle icon={<ScalesIcon fill={'#fff'} />}
								counter={compare.getTotalQuantity()}
								backgroundColor={'#1E6140'}
								borderColor={'#fff'}
							/>
						</Link>
						<Link to={'/shoppingCart'}>
							<Circle icon={<CartIcon fill={'#fff'} />}
								counter={cart.getTotalQuantity()}
								backgroundColor={'#1E6140'}
								borderColor={'#fff'}
							/>
						</Link>
						<Amount color={'#fff'} />
					</div>
					<div className='menuSection'>
						<Link to={'/favourites'}>
							<Circle icon={<FavoriteIcon fill={'#fff'} />}
								counter={favourit.getTotalQuantity()}
								backgroundColor={'#1E6140'}
								borderColor={'#fff'}
							/>
						</Link>
						<Search />
					</div>
					<div className='menuSection'>
						<PhoneS
							icon={<Circle icon={<PhoneIcon fill={'#fff'} />}
								backgroundColor={'#1E6140'}
								borderColor={'#fff'}
							/>}
							numberPhone={'+38(097)254-333'} text={'Замовити зворотній дзвінок'} />
					</div>
				</div>
				<div className='menuSmall' onClick={toggleClass}>
					<ul className='menuList menuList2'>
						{itemsS2.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
					</ul>
				</div>
			</div>
		</div >
	</>
}