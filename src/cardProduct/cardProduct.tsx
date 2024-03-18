import './cardProduct.css'
import Circle from '../circle/circle'
import CartIcon from '../cartIcon'
import ScalesIcon from '../scalesIcon';

export default function CardProduct(props: {
	url: string;
	name: string;
	alt: string;
	cost: number;
	type: string;
	amount: number;
	stocked: string
}) {
	return <div className='card'>
		<div className='scalesIcon'><ScalesIcon /></div>
		<img src={props.url} />
		<div className='cardText'>
			<p>	{props.name}</p>
			<p className='stocked'>{props.stocked}</p>
			<div className='cardItems'>
				<div className='price'>
					<p className='cost'>{props.cost} грн.</p>
					<p className='amount'>
						{props.amount} шт.
					</p>
				</div>
				<Circle link={'#'} border={'none'} boxShadow={'0px 0px 8px 0px rgba(0, 0, 0, 0.15)'} icon={<CartIcon />} counter={0} />
			</div>
		</div>
	</div>
}
