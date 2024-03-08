import MenuItem from './menuItem'

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
		link: './entr'
	},
	{
		name: 'Реестрація',
		link: './registry'
	}];

	return <div className='menu'>
		<ul className='menuList'>
			{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
		</ul>
	</div>
}