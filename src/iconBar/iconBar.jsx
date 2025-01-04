import './iconBar.css'
import Circle from '../circle/circle'
import Amount from '../amount/amount'
import FavoriteIcon from '../favoriteIcon'
import ScalesIcon from '../scalesIcon'
import CartIcon from '../cartIcon'
import { Link } from 'react-router-dom'
import { useCartContext } from '../shoppingCartContext'
import { useFavouritContext } from '../favouritesContext'
import { useCompareContext } from '../compareContext'

export default function IconBar() {
	const cart = useCartContext();
	const favourit = useFavouritContext();
	const compare = useCompareContext();

	return <div className='iconBar'>
		<Link to={'./favourites'}>
			<Circle icon={<FavoriteIcon />} counter={favourit.getTotalQuantity()} />
		</Link>
		<Link to={'./compare'}>
			<Circle icon={<ScalesIcon />} counter={compare.getTotalQuantity()} />
		</Link>
		<Link to={'./shoppingCart'}>
			<Circle icon={<CartIcon />} counter={cart.getTotalQuantity()} />
		</Link>
		<Amount />
	</div>
}