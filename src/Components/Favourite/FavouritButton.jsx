import Circle from '../Circle/Circle';
import FavoriteIcon from '../FavoriteIcon';
import { useFavouritContext } from '../../Contexts/favouritesContext';
import PropTypes from 'prop-types';

export default function FavouritButton(props) {
	FavouritButton.propTypes = {
		product: PropTypes.string
	}
	const favourit = useFavouritContext();
	const isInFavourite = favourit.contains(props.product.id);
	const border = isInFavourite ? 'none' : '';
	const background = isInFavourite ? '#84BE51' : '';
	const fill = isInFavourite ? '#fff' : '';
	return <Circle link={'#'} icon={<FavoriteIcon fill={fill} />} onClick={() => favourit.toggle(props.product, 1)} backgroundColor={background} border={border} />

}