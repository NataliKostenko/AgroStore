import './amount.css';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import PropTypes from 'prop-types';

export default function Amount(props) {
	const style = {
		color: props.color
	}
	Amount.propTypes = {
		color: PropTypes.string
	}

	const cart = useCartContext();

	return (
		<div className='amount' style={style}>
			{cart.getTotalAmount()} грн.
		</div>
	)
}