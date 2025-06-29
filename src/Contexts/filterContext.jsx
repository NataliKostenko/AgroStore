import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
	const [filters, setFilters] = useState({});

	const updateFilter = (key, value, isChecked) => {
		setFilters(prevFilters => {
			const updated = { ...prevFilters };
			if (!updated[key]) {
				updated[key] = new Set();
			}

			if (isChecked) {
				updated[key].add(value);
			} else {
				updated[key].delete(value);
			}

			return { ...updated };
		});
	};

	return (
		<FilterContext.Provider value={{ filters, updateFilter }}>
			{children}
		</FilterContext.Provider>
	);
}

FilterProvider.propTypes = {
	children: PropTypes.node.isRequired
};
