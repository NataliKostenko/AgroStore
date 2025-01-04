import './order.css'
import ButtonDelete from '../shoppingCart/buttonDelete';
import { useCartContext } from '../../shoppingCartContext';

export default function OrderCartItem({ product }) {
	const cart = useCartContext();
	return <div className='orderCartItem'>
		<div className='productInCart'>
			<img src={product.url} alt={product.alt} />
			<div className='orderCostWrap'>
				<p className='productName'>{product.name}</p>
				<div className='orderItemSum'>
					<p className='productCost'>{product.cost} грн/{product.unit} </p>
					<p className='productName'>х {cart.getProductQuantity(product.id)}</p>
					<p className='productCost'>{product.cost * cart.getProductQuantity(product.id)} грн.</p>
				</div>
			</div>
			<ButtonDelete productId={product.id} />
		</div>
	</div>
}