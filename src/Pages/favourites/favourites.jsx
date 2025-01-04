import './favourites.css'
import H1 from '../../H1/h1';
import FavouriteItem from './favouriteItem';
import Button from '../../button/button';
import BinIcon from "../shoppingCart/binIcon";
import { useFavouritContext } from '../../favouritesContext'

export default function Favourites() {
	const favourit = useFavouritContext();

	return <div className='favouritesPage'>
		<H1 text={'Обрані товари'} />
		{favourit.items.map((item, index) => <FavouriteItem key={index} product={item} />)}
		<hr></hr>
		<div className='clear'>
			<Button img={<BinIcon />} onClick={() => favourit.clear()} text='видалити все' /></div>
	</div>
}