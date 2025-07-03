import './catalogPanel.css';
import MenuItem from '../Menu/MenuItem';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function CatalogPanel(props) {
	CatalogPanel.propTypes = {
		url: PropTypes.string
	}
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

	return <div className='catalogPanel'>
		<ul className='catalogMenu'>
			{items.map((item, index) => <MenuItem itemName={item.name} key={index} itemLink={item.link} />)}
		</ul>
	</div>
}