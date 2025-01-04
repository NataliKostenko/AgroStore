import './partnersPage.css';
import PartnerCard from '../../partnerCard/partnerCard';
import { useEffect, useState } from 'react';
import H1 from '../../H1/h1'
export default function PartnersPage(props) {
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
	return <div className='partnersPageWrap'>
		<H1 text={'Партнери'} />
		<div className='partnersPage'>
			{items.map((item, index) => <PartnerCard url={item.url} alt={item.alt} title={item.title} text={item.text} key={index} />)}
		</div>
	</div>
}