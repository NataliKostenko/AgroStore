import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [searchQuery, setSearchQuery] = useState('');
	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			{children}
		</SearchContext.Provider>
	);
}

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired
};
