import '../order/order.css'
import ButtonDelete from '../shoppingCart/buttonDelete';
import Button from '../../button/button';
import CartIcon from '../../cartIcon';
import { useCartContext } from '../../shoppingCartContext';
import { useCompareContext } from '../../compareContext';

export default function CompareItem({ product }) {
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