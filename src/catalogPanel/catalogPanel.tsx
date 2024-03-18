import './catalogPanel.css'
import MenuItem from '../menu/menuItem'
export default function CatalogPanel() {
	const items = [{
		name: 'Гербіциди',
		link: './herbicides'
	},
	{
		name: 'Фунгіциди',
		link: './fungicides'
	},
	{
		name: 'Інсектициди',
		link: './insecticides'
	},
	{
		name: 'Десиканти',
		link: './dessicants'
	},
	{
		name: 'Протруювачі',
		link: './disinfectants'
	},
	{
		name: 'Ад’юванти',
		link: './adjuvants'
	},
	{
		name: 'Родентициди',
		link: './rodenticides'
	},
	{
		name: 'Ретарданти',
		link: './retardants'
	}
	]
	return <>
		<p className='pCatalogPanel'>Показано 621 товарів</p>
		<div className='catalogPanel'>
			<ul className='catalogMenu'>
				{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
			</ul>
		</div></>
}