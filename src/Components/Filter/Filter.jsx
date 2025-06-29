import { useEffect, useState, useContext } from "react";
import FilterItem from "./FilterItem.jsx";
import './filter.css';
import PropTypes from 'prop-types';
import { FilterContext } from '../../Contexts/filterContext';

export default function Filter({ url, filterKey }) {
	const [items, setItems] = useState([]);
	const { updateFilter } = useContext(FilterContext);

	useEffect(() => {
		const loadData = async () => {
			const items = await fetch(url).then((res) => res.json());
			setItems(items);
		};
		loadData();
	}, [url]);

	const handleChange = (id, isChecked) => {
		updateFilter(filterKey, id, isChecked);
	};

	return (
		<div>
			{items.map((item, index) => (
				<FilterItem
					id={item.value || item.text}
					text={item.text}
					onChange={handleChange}
					key={index}
				/>
			))}
		</div>
	);
}

Filter.propTypes = {
	url: PropTypes.string.isRequired,
	filterKey: PropTypes.string.isRequired
};