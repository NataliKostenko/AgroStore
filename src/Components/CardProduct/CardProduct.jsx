import './cardProduct.css';
import CartIcon from '../Icons/CartIcon';
import ScalesIcon from '../Icons/ScalesIcon';
import { Link } from 'react-router-dom';
import CircleCardProductItem from '../Circle/CircleCardProductItem';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import PropTypes from 'prop-types';

export default function CardProduct(props) {
	const cart = useCartContext();

	CardProduct.propTypes = {
		id: PropTypes.number,
		url: PropTypes.string,
		name: PropTypes.string,
		stocked: PropTypes.string,
		cost: PropTypes.number,
		amount: PropTypes.number,
		unit: PropTypes.string
	}

	return <Link to={'/catalog/details/' + props.id} >
		<div className='card' >
			<div className='scalesIcon'><ScalesIcon /></div>
			<img src={props.url} />
			<div className='cardText'>
				<p>	{props.name}</p>
				<p className='stocked'>{props.stocked}</p>
				<div className='cardItems'>
					<div className='price'>
						<p className='cost'>{props.cost} грн.</p>
						<p className='amount'>
							{props.amount} {props.unit}.
						</p>
					</div>
					<CircleCardProductItem border={'none'} boxShadow={'0px 0px 8px 0px rgba(0, 0, 0, 0.15)'}
						icon={<CartIcon />}
						onClick={(event) => { cart.append(props, 1); event.preventDefault(); }} />
				</div>
			</div>
		</div>
	</Link>
}
