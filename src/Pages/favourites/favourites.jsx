import './favourites.css';
import H1 from '../../Components/H1/H1';
import FavouriteItem from '../../Components/Favourite/FavouriteItem';
import Button from '../../Components/Button/Button';
import BinIcon from "../shoppingCart/binIcon";
import { useFavouritContext } from '../../Contexts/favouritesContext';

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