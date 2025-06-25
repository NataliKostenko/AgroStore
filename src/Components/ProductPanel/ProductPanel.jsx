import './productPanel.css';
import CardProduct from '../CardProduct/CardProduct';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';

export default function ProductPanel({ url }) {
	const [items, setItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	useEffect(() => {
		const loadData = async () => {
			if (!url) throw new Error('URL must be provided.');
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
		};
		loadData();
	}, [url]);

	const list = (array, pageSize, pageNumber) => {
		const startIndex = (pageNumber - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return array.slice(startIndex, endIndex);
	};

	const visibleItems = list(items, itemsPerPage, currentPage);

	return (
		<div className='productPanelWrap'>
			<select className='productPanelSelect' title='Сортувати за'>
				<option value="1">Сортувати за</option>
				<option value="2">Новинками</option>
				<option value="3">Популярністю</option>
			</select>
			<div className='productPanel'>
				{visibleItems.map((item, index) => (
					<CardProduct
						key={item.id || index}
						type={''}
						url={item.url}
						name={item.name}
						alt={item.alt}
						cost={item.cost}
						amount={item.amount}
						stocked={item.stocked}
						id={item.id}
						unit={item.unit}
					/>
				))}
			</div>
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={items.length}
				currentPage={currentPage}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
}

ProductPanel.propTypes = {
	url: PropTypes.string.isRequired
};

