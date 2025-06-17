import { useState } from "react";
import './shoppingCart.css';
import ButtonDelete from "./buttonDelete";
import { useCartContext } from "../../Contexts/shoppingCartContext";
import PropTypes from 'prop-types';

export default function CartItem({ product }) {
	CartItem.propTypes = {
		product: PropTypes.string,
	}

	const cart = useCartContext();
	const [number, setNumber] = useState(cart.getProductQuantity(product.id));

	return <div className='productInCart'>
		<img src={product.url} alt={product.alt} />
		<p className='productName'>{product.name}</p>
		<p className='productCost'>{product.cost} грн/{product.unit} </p>
		<div className='caunterCart productName'>
			<button onClick={() => {
				setNumber(number - 1);
				cart.append(product, - 1)
			}}>-</button>
			<p>{number}</p>
			<button onClick={() => {
				setNumber(number + 1);
				cart.append(product, 1)
			}}>+</button>
		</div>
		<p className='productCost'>{product.cost * number} грн.</p>
		<ButtonDelete onClick={() => cart.remove(product.id)} />
	</div>
}
