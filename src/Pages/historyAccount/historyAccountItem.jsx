import '../order/order.css'
import ButtonDelete from '../shoppingCart/buttonDelete';
// import { useCartContext } from '../../shoppingCartContext';

export default function HistoryAccountItem() {

	return <div className='orderCartItem'>
		<div className='productInCart'>
			<img src='/xopyc.png' />
			{/* {product.url} alt={product.alt}  */}
			<div className='orderCarentWrap'>
				<p className='orderCarentproductName'>Гербіцид Комманд®, ФМС УКРАЇНА</p>
				{/* {product.name} */}
				<div className='orderItemInfo'>
					{/* {product.cost} грн/{product.unit}  */}
					<p className='orderCarentproductText'>кількість</p>
					<p className='orderCarentproductText'>х 1</p>
					{/* {cart.getProductQuantity(product.id)} */}
					<p className='orderCarentproductDate'>20.10.2024</p>
					<p className='productCost'>20 грн</p>
					{/* {product.cost * cart.getProductQuantity(product.id)} грн. */}
				</div>
			</div>
			<ButtonDelete />
		</div>
	</div>
}
