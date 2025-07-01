import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';
import { SearchContext } from '../../Contexts/searchContext';
import { FilterContext } from '../../Contexts/filterContext';
import CardProduct from '../CardProduct/CardProduct';
import './productPanel.css';

export default function ProductPanel({ url }) {
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [sortOption, setSortOption] = useState('1');
	const itemsPerPage = 9;
	const { searchQuery } = useContext(SearchContext);
	const { filters } = useContext(FilterContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = parseInt(searchParams.get('page')) || 1;
	const [currentPage, setCurrentPage] = useState(pageParam);

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
		filterAndSort();
	}, [searchQuery, filters, items, sortOption]);

	useEffect(() => {
		setCurrentPage(pageParam);
	}, [pageParam]);

	useEffect(() => {
		setCurrentPage(pageParam);
	}, [pageParam]);

	const filterAndSort = () => {
		const lower = searchQuery.trim().toLowerCase();

		const matchesSearch = (item) => item.name?.toLowerCase().includes(lower);

		const matchesFilters = (item) => {
			if (!filters) return true;

			for (const [key, values] of Object.entries(filters)) {
				if (values.size === 0) continue;
				if (!values.has(item[key])) return false;
			}
			return true;
		};

		let result = items.filter(item => matchesSearch(item) && matchesFilters(item));
		result = applySort(result, sortOption);
		setFilteredItems(result);
		setSearchParams({ page: pageParam });
	};

	const applySort = (itemsToSort, option) => {
		switch (option) {
			case '2':
				return [...itemsToSort].sort((a, b) => a.cost - b.cost);
			case '3':
				return [...itemsToSort].sort((a, b) => b.cost - a.cost);
			default:
				return itemsToSort;
		}
	};

	const handleSortChange = (e) => setSortOption(e.target.value);

	const list = (array, pageSize, pageNumber) => {
		const startIndex = (pageNumber - 1) * pageSize;
		return array.slice(startIndex, startIndex + pageSize);
	};

	const visibleItems = list(filteredItems, itemsPerPage, currentPage);

	const handlePageChange = (page) => {
		setSearchParams({ page: page.toString() });
	};

	return (
		<div className='productPanelWrap'>
			<select className='productPanelSelect' value={sortOption} onChange={handleSortChange}>
				<option value="1">Сортувати за ціною</option>
				<option value="2">Ціна за зростанням</option>
				<option value="3">Ціна за спаданням</option>
			</select>
			<div className='productPanel'>
				{visibleItems.length > 0 ? (
					visibleItems.map((item, index) => (
						<CardProduct
							key={item.id || index}
							{...item}
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
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	);
}

ProductPanel.propTypes = {
	url: PropTypes.string.isRequired
};

