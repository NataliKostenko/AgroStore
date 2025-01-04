import { useContext } from 'react';
import { createContext, useState } from 'react';

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
	/* const [showItems, setShowItems] = useState(false);
	const [showAlert, setShowAlert] = useState(null); */

	const toggle = (product, quantity = 1) => {
		// нужно проверить, нет ли уже такого товара в избранном
		const itemIndex = compareItems.findIndex(value => value.id === product.id);
		if (itemIndex < 0) { // такого товара еще нет
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

	/* const toggleShow = () => setShowItems(!showItems);

	const hideAlert = () => setShowAlert(null);
 */
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

	// const getTotalAmount = () => cartItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);

	const clear = () => setCompareItemsInternal([]);

	const setCompareItemsInternal = (compareItems) => {
		localStorage.setItem(compareId, JSON.stringify(compareItems));
		setCompareItems(compareItems);
	}

	// контекст, который будет доступен всем потомкам
	const value = {
		items: compareItems,
		toggle: toggle,
		remove: remove,
		contains: contains,
		// showItems: showItems,
		// toggleShow: toggleShow,
		// showAlert: showAlert,
		// hideAlert: hideAlert,
		getCompareQuantity: getCompareQuantity,
		// getTotalAmount: getTotalAmount,
		clear: clear,
		getTotalQuantity: getTotalQuantity
	};

	return (
		<compareContext.Provider value={value}>
			{props.children}
		</compareContext.Provider>
	);
}

const useCompareContext = () => useContext(compareContext);

export { useCompareContext, CompareContextProvider };


