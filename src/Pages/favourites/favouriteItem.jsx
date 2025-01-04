import '../order/order.css'
import ButtonDelete from '../shoppingCart/buttonDelete';
import Button from '../../button/button';
import CartIcon from '../../cartIcon';
import { useCartContext } from '../../shoppingCartContext';
import { useFavouritContext } from '../../favouritesContext';

export default function FavouriteItem({ product }) {
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