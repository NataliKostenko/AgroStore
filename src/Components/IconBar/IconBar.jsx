import './iconBar.css';
import Circle from '../Circle/Circle';
import Amount from '../Amount/Amount';
import FavoriteIcon from '../FavoriteIcon';
import ScalesIcon from '../ScalesIcon';
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Contexts/shoppingCartContext';
import { useFavouritContext } from '../../Contexts/favouritesContext';
import { useCompareContext } from '../../Contexts/compareContext';

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