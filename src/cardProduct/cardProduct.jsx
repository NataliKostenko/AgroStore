import './cardProduct.css'
import CartIcon from '../cartIcon'
import ScalesIcon from '../scalesIcon';
import { Link } from 'react-router-dom';
import CircleCardProductItem from '../circle/circleCardProductItem';
import { useCartContext } from '../shoppingCartContext'

export default function CardProduct(props) {
	const cart = useCartContext();

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
