import H1 from '../../H1/h1'
import './historyAccount.css'
import HistoryAccountItem from './historyAccountItem'
export default function HistoryAccount() {
	return < div className='ordersPage'>
		<H1 text={'Історія замовлень'} />
		<HistoryAccountItem />
		<HistoryAccountItem />
		<HistoryAccountItem />
	</div>
}