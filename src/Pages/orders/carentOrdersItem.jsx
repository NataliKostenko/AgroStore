import '../order/order.css';
import ButtonDelete from '../shoppingCart/buttonDelete';

export default function CarentOrdersItem() {
	return <div className='orderCartItem'>
		<div className='productInCart'>
			<img src='/xopyc.png' />
			<div className='orderCarentWrap'>
				<p className='orderCarentproductName'>Гербіцид Комманд®, ФМС УКРАЇНА</p>
				<div className='orderItemInfo'>
					<p className='orderCarentproductText'>кількість</p>
					<p className='orderCarentproductText'>х 1</p>
					<p className='orderCarentproductDate'>20.10.2024</p>
					<button className='stateOrder'>Сплачено</button>
					<p className='productCost'>20 грн</p>
				</div>
			</div>
			<ButtonDelete />
		</div>
	</div>
}