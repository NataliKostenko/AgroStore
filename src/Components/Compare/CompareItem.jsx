import '../../Pages/order/order.css';
import ButtonDelete from '../../Pages/shoppingCart/buttonDelete';
import Button from '../Button/Button';
import CartIcon from '../CartIcon';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import { useCompareContext } from '../../Contexts/compareContext';
import PropTypes from 'prop-types';

export default function CompareItem({ product }) {
	CompareItem.propTypes = {
		product: PropTypes.string
	}
	const cart = useCartContext();
	const compare = useCompareContext();

	return <div className='productInCart'>
		<img src={product.url} alt={product.alt} />
		<p className='productName'>{product.name}</p>
		<p className='productCost'>{product.cost} грн/{product.unit} </p>
		<Button img={<CartIcon />} link='#' onClick={(event) => { cart.append(product, 1); event.preventDefault(); }} text='Купити' />
		<ButtonDelete onClick={() => compare.remove(product.id)} />
	</div>
}