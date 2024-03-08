import './productPanel.css';
import CardProduct from '../cardProduct/cardProduct';
import { useEffect, useState } from 'react';
import PagesNumbersPanelItem from '../pagesNumbersPanelItem/pagesNumbersPanelItem';

export default function ProductPanel(props: { url: string }) {
	const [items, setItems] = useState<{
		url: string;
		name: string;
		alt: string;
		cost: number;
		type: string
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
	return <div className='productPanelWrap'>
		<div className='productPanel'>
			{items.map((item, index) => <CardProduct key={index} url={item.url} name={item.name} alt={item.alt} cost={item.cost} type={''} />)}
		</div>
		<PagesNumbersPanelItem />
	</div>
}