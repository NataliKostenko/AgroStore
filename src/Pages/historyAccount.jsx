import H1 from '../Components/H1/H1'
import HistoryAccountItem from '../Components/HistoryAccountItem'
export default function HistoryAccount() {
	return < div className='ordersPage'>
		<H1 text={'Історія замовлень'} />
		<HistoryAccountItem />
		<HistoryAccountItem />
		<HistoryAccountItem />
	</div>
}