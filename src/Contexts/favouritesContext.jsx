import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const favouritContext = createContext();
const favouritId = '22aaf1cb-9e0e-44c3-a4e9-490a336b7796';

const FavouritContextProvider = (props) => {

	const getFavouritState = () => {
		const favouritState = localStorage.getItem(favouritId);
		if (favouritState) {
			return JSON.parse(favouritState);
		}
		return [];
	};

	const [favouritItems, setFavouritItems] = useState(getFavouritState());
	const toggle = (product, quantity = 1) => {
		const itemIndex = favouritItems.findIndex(value => value.id === product.id);
		if (itemIndex < 0) {
			const newItem = {
				...product,
				quantity: quantity
			};
			setFavouritItemsInternal([...favouritItems, newItem]);
		} else {
			remove(product.id)
		}
	};

	const contains = (productId) => {
		const itemIndex = favouritItems.findIndex(value => value.id === productId);
		return itemIndex >= 0;
	};

	const remove = (id) => {
		const newFavourit = favouritItems.filter(product => product.id !== id);
		setFavouritItemsInternal(newFavourit);
	}

	const getFavouritQuantity = (productId) => {
		const itemIndex = favouritItems.findIndex(value => value.id === productId);
		if (itemIndex < 0) {
			return 0
		}
		else {
			return favouritItems[itemIndex].quantity
		}
	}
	const getTotalQuantity = () => favouritItems.reduce((quantity, currentValue) => quantity + currentValue.quantity, 0);

	const clear = () => setFavouritItemsInternal([]);

	const setFavouritItemsInternal = (favouritItems) => {
		localStorage.setItem(favouritId, JSON.stringify(favouritItems));
		setFavouritItems(favouritItems);
	}

	const value = {
		items: favouritItems,
		toggle: toggle,
		remove: remove,
		contains: contains,
		getFavouritQuantity: getFavouritQuantity,
		clear: clear,
		getTotalQuantity: getTotalQuantity
	};

	return (
		<favouritContext.Provider value={value}>
			{props.children}
		</favouritContext.Provider>
	);
}

const useFavouritContext = () => useContext(favouritContext);

export { useFavouritContext, FavouritContextProvider };

FavouritContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};

