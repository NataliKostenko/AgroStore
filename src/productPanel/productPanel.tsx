import './productPanel.css';
import CardProduct from '../cardProduct/cardProduct';
import { useEffect, useState } from 'react';
import PagesNumbersPanelItem from '../pagesNumbersPanelItem/pagesNumbersPanelItem';
// import Pagination from 'rc-pagination';

export default function ProductPanel(props: { url: string }) {
	const [items, setItems] = useState<{
		url: string;
		name: string;
		alt: string;
		cost: number;
		amount: number;
		type: string;
		stocked: string;
		// }) {
	}[]>([]);

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
				{items.map((item, index) => <CardProduct type={''} key={index} url={item.url} name={item.name} alt={item.alt} cost={item.cost} amount={item.amount} stocked={item.stocked} />)}
			</div>
			{/* <Pagination total={9} /> */}
			<PagesNumbersPanelItem />
		</div>
	</>
}