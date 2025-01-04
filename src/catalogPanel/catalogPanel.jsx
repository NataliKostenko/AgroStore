import './catalogPanel.css'
import MenuItem from '../menu/menuItem'
import { useEffect, useState } from 'react';

export default function CatalogPanel(props) {

	const [items, setItems] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			if (!props.url) throw new Error('URL must be provided.');
			const items = await fetch(props.url)
				.then((items) => items.json());
			setItems(items);
		};
		loadData();
	}, []);

	return <>
		<p className='pCatalogPanel'>Показано 621 товарів</p>
		<div className='catalogPanel'>
			<ul className='catalogMenu'>
				{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
			</ul>
		</div></>
}