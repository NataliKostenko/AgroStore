import H1 from '../../H1/h1'
import './orders.css'
import CarentOrdersItem from './carentOrdersItem'

export default function Orders() {
	return <div className='ordersPage'>
		<H1 text={'Поточні замовлення'} />
		<CarentOrdersItem />
		<CarentOrdersItem />
		<CarentOrdersItem />
	</div>
}