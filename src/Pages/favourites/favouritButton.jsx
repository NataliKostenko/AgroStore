import Circle from '../../circle/circle';
import FavoriteIcon from '../../favoriteIcon';
import { useFavouritContext } from '../../favouritesContext'

export default function FavouritButton(props) {
	const favourit = useFavouritContext();
	const isInFavourite = favourit.contains(props.product.id);
	const border = isInFavourite ? 'none' : '';
	const background = isInFavourite ? '#84BE51' : '';
	const fill = isInFavourite ? '#fff' : '';
	return <Circle link={'#'} icon={<FavoriteIcon fill={fill} />} onClick={() => favourit.toggle(props.product, 1)} backgroundColor={background} border={border} />

}