import './iconBar.css'
import Circle from '../circle/circle'
import Amount from '../amount/amount'
import FavoriteIcon from '../favoriteIcon'
import ScalesIcon from '../scalesIcon'
import CartIcon from '../cartIcon'

export default function IconBar() {
	return <div className='iconBar'>
		<Circle link={'#'} icon={<FavoriteIcon />} counter={3} border={undefined} boxShadow={undefined} />
		<Circle link={'#'} icon={<ScalesIcon />} counter={5} border={undefined} boxShadow={undefined} />
		<Circle link={'#'} icon={<CartIcon />} counter={7} border={undefined} boxShadow={undefined} />
		<Amount />
	</div>
}