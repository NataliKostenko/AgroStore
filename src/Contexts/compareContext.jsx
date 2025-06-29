import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const compareContext = createContext();
const compareId = '22aaf1cb-9e0e-44c3-a4e9-490a336b7796';

const CompareContextProvider = (props) => {

	const getCompareState = () => {
		const compareState = localStorage.getItem(compareId);
		if (compareState) {
			return JSON.parse(compareState);
		}
		return [];
	};

	const [compareItems, setCompareItems] = useState(getCompareState());

	const toggle = (product, quantity = 1) => {
		const itemIndex = compareItems.findIndex(value => value.id === product.id);
		if (itemIndex < 0) {
			const newItem = {
				...product,
				quantity: quantity
			};
			setCompareItemsInternal([...compareItems, newItem]);
		} else {
			remove(product.id)
		}
	};

	const contains = (productId) => {
		const itemIndex = compareItems.findIndex(value => value.id === productId);
		return itemIndex >= 0;
	};

	const remove = (id) => {
		const newCompare = compareItems.filter(product => product.id !== id);
		setCompareItemsInternal(newCompare);
	}

	const getCompareQuantity = (productId) => {
		const itemIndex = compareItems.findIndex(value => value.id === productId);
		if (itemIndex < 0) {
			return 0
		}
		else {
			return compareItems[itemIndex].quantity
		}
	}
	const getTotalQuantity = () => compareItems.reduce((quantity, currentValue) => quantity + currentValue.quantity, 0);

	const clear = () => setCompareItemsInternal([]);

	const setCompareItemsInternal = (compareItems) => {
		localStorage.setItem(compareId, JSON.stringify(compareItems));
		setCompareItems(compareItems);
	}

	const value = {
		items: compareItems,
		toggle: toggle,
		remove: remove,
		contains: contains,
		getCompareQuantity: getCompareQuantity,
		clear: clear,
		getTotalQuantity: getTotalQuantity
	};

	return (
		<compareContext.Provider value={value}>
			{props.children}
		</compareContext.Provider>
	);
}

CompareContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};
const useCompareContext = () => useContext(compareContext);
export { useCompareContext, CompareContextProvider };
