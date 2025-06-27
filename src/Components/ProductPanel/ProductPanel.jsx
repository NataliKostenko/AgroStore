import './productPanel.css';
import CardProduct from '../CardProduct/CardProduct';
import { useEffect, useState, useContext } from 'react';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';
import { SearchContext } from '../../Contexts/searchContext';
export default function ProductPanel({ url }) {
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;
	const { searchQuery } = useContext(SearchContext);

	useEffect(() => {
		const loadData = async () => {
			if (!url) throw new Error('URL must be provided.');
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
			setFilteredItems(data);
		};
		loadData();
	}, [url]);

	useEffect(() => {
		const lower = searchQuery.trim().toLowerCase();
		const filtered = items.filter(item =>
			(item.name?.toLowerCase().includes(lower))
		);
		setFilteredItems(filtered);
		setCurrentPage(1);
	}, [searchQuery, items]);

	const list = (array, pageSize, pageNumber) => {
		const startIndex = (pageNumber - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return array.slice(startIndex, endIndex);
	};

	const visibleItems = list(filteredItems, itemsPerPage, currentPage);

	return (
		<div className='productPanelWrap'>
			<select className='productPanelSelect' title='Сортувати за'>
				<option value="1">Сортувати за</option>
				<option value="2">Новинками</option>
				<option value="3">Популярністю</option>
			</select>
			<div className='productPanel'>
				{visibleItems.length > 0 ? (
					visibleItems.map((item, index) => (
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
					))
				) : (
					<p>Нічого не знайдено.</p>
				)}
			</div>
			{filteredItems.length > itemsPerPage && (
				<Pagination
					itemsPerPage={itemsPerPage}
					totalItems={filteredItems.length}
					currentPage={currentPage}
					onPageChange={setCurrentPage}
				/>
			)}
		</div>
	);
}
ProductPanel.propTypes = {
	url: PropTypes.string.isRequired
};

