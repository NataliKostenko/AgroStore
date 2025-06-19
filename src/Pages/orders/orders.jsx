import H1 from '../../Components/H1/H1';
import './orders.css';
import CarentOrdersItem from '../../Components/CarentOrdersItem';

export default function Orders() {
	return <div className='ordersPage'>
		<H1 text={'Поточні замовлення'} />
		<CarentOrdersItem />
		<CarentOrdersItem />
		<CarentOrdersItem />
	</div>
}