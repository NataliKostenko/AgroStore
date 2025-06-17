import '../../Pages/order/order.css';
import ButtonDelete from '../../Pages/shoppingCart/buttonDelete';
import Button from '../Button/Button';
import CartIcon from '../CartIcon';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import { useFavouritContext } from '../../Contexts/favouritesContext';
import PropTypes from 'prop-types';

export default function FavouriteItem({ product }) {
	FavouriteItem.propTypes = {
		product: PropTypes.string
	}
	const cart = useCartContext();
	const favourit = useFavouritContext();

	return <div className='productInCart'>
		<img src={product.url} alt={product.alt} />
		<p className='productName'>{product.name}</p>
		<p className='productCost'>{product.cost} грн/{product.unit} </p>
		<Button img={<CartIcon />} link='#' onClick={(event) => { cart.append(product, 1); event.preventDefault(); }} text='Купити' />
		<ButtonDelete onClick={() => favourit.remove(product.id)} />
	</div>
}