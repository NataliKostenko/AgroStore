import { useContext } from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();
const cartId = '22aaf1cb-9e0e-44c3-a4e9-490a336b7685';

const CartContextProvider = (props) => {

	const getCartState = () => {
		const cartState = localStorage.getItem(cartId);
		if (cartState) {
			return JSON.parse(cartState);
		}
		return [];
	};

	const [cartItems, setCartItems] = useState(getCartState());
	const [showItems, setShowItems] = useState(false);
	const [showAlert, setShowAlert] = useState(null);

	const append = (product, quantity = 1) => {
		// нужно проверить, нет ли уже такого товара в корзине
		const itemIndex = cartItems.findIndex(value => value.id === product.id);
		if (itemIndex < 0) { // такого товара еще нет
			const newItem = {
				...product,
				quantity: quantity
			};
			setCartItemsInternal([...cartItems, newItem]);
		} else { // такой товар уже есть
			const newItem = {
				...cartItems[itemIndex],
				quantity: cartItems[itemIndex].quantity + quantity
			};
			const newCart = cartItems.slice(); // копия массива cartItems
			newCart.splice(itemIndex, 1, newItem);
			setCartItemsInternal(newCart);
		}
		// setShowAlert(cartItems.name + ' добавлен в корзину');
	};

	const remove = (id) => {
		const newCart = cartItems.filter(product => product.id !== id);
		setCartItemsInternal(newCart);
	}

	const toggleShow = () => setShowItems(!showItems);

	const hideAlert = () => setShowAlert(null);

	const getProductQuantity = (productId) => {
		const itemIndex = cartItems.findIndex(value => value.id === productId);
		if (itemIndex < 0) {
			return 0
		}
		else {
			return cartItems[itemIndex].quantity
		}
	}
	const getTotalQuantity = () => cartItems.reduce((quantity, currentValue) => quantity + currentValue.quantity, 0);

	const getTotalAmount = () => cartItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);

	const clear = () => setCartItemsInternal([]);

	const setCartItemsInternal = (cartItems) => {
		localStorage.setItem(cartId, JSON.stringify(cartItems));
		setCartItems(cartItems);
	}

	// контекст, который будет доступен всем потомкам
	const value = {
		items: cartItems,
		append: append,
		remove: remove,
		showItems: showItems,
		toggleShow: toggleShow,
		showAlert: showAlert,
		hideAlert: hideAlert,
		getProductQuantity: getProductQuantity,
		getTotalAmount: getTotalAmount,
		clear: clear,
		getTotalQuantity: getTotalQuantity
	};

	return (
		<CartContext.Provider value={value}>
			{props.children}
		</CartContext.Provider>
	);
}

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };


