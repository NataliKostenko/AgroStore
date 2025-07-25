import '../Pages/order/order.css';
import ButtonDelete from '../Components/ButtonDelete';

export default function HistoryAccountItem() {

	return <div className='orderCartItem'>
		<div className='productInCart'>
			<img src='/xopyc.webp' />
			<div className='orderCarentWrap'>
				<div className='orderItemInfo'>
					<p className='orderCarentproductText'>кількість</p>
					<p className='orderCarentproductText'>х 1</p>
					<p className='orderCarentproductDate'>20.10.2024</p>
					<p className='productCost'>20 грн</p>
				</div>
			</div>
			<ButtonDelete />
		</div>
	</div>
}
