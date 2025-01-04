import './amount.css';
import { useCartContext } from '../shoppingCartContext'

export default function Amount(props) {
	const style = {
		color: props.color
	}
	const cart = useCartContext();

	return (
		<div className='amount' style={style}>
			{cart.getTotalAmount()} грн.
		</div>
	)
}