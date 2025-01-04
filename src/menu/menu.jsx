import MenuItem from './menuItem'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Circle from '../circle/circle'
import Amount from '../amount/amount'
import FavoriteIcon from '../favoriteIcon'
import ScalesIcon from '../scalesIcon'
import CartIcon from '../cartIcon'
import PhoneIcon from '../phoneIcon'
import { Link } from 'react-router-dom'
import { useCartContext } from '../shoppingCartContext'
import { useFavouritContext } from '../favouritesContext'
import { useCompareContext } from '../compareContext'
import Search from '../input/search';
import PhoneS from '../phone/phoneS';

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