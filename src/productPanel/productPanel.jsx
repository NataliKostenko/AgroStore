import './productPanel.css';
import CardProduct from '../cardProduct/cardProduct';
import { useEffect, useState } from 'react';
import Pagination from '../pagesNumbersPanelItem/pagesNumbersPanelItem';

export default function ProductPanel(props) {
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
		<div className='productPanelWrap'>
			<select className='productPanelSelect' title='Сортувати за'>
				<option value="1">Сортувати за</option>
				<option value="2">Новинками</option>
				<option value="3">Популярністю</option>
			</select>
			<div className='productPanel'>
				{items.map((item, index) => <CardProduct type={''} key={index} url={item.url} name={item.name} alt={item.alt} cost={item.cost} amount={item.amount} stocked={item.stocked} id={item.id} unit={item.unit} />)}
			</div>
			<Pagination length={50} itemsPerPage={10}
			/>
		</div>
	</>
}