import Circle from '../Circle/Circle';
import ScalesIcon from '../Icons/ScalesIcon';
import { useCompareContext } from '../../Contexts/compareContext';
import PropTypes from 'prop-types';

export default function CompareButton(props) {
	CompareButton.propTypes = {
		product: PropTypes.string
	}
	const compare = useCompareContext();
	const isInCompare = compare.contains(props.product.id);
	const border = isInCompare ? 'none' : '';
	const background = isInCompare ? '#84BE51' : '';
	const fill = isInCompare ? '#fff' : '';
	return <Circle link={'#'} icon={<ScalesIcon fill={fill} />} onClick={() => compare.toggle(props.product, 1)}
		backgroundColor={background} border={border} />

}