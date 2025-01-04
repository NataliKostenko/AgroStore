import Circle from '../../circle/circle';
import ScalesIcon from '../../scalesIcon';
import { useCompareContext } from '../../compareContext'

export default function CompareButton(props) {
	const compare = useCompareContext();
	const isInCompare = compare.contains(props.product.id);
	const border = isInCompare ? 'none' : '';
	const background = isInCompare ? '#84BE51' : '';
	const fill = isInCompare ? '#fff' : '';
	return <Circle link={'#'} icon={<ScalesIcon fill={fill} />} onClick={() => compare.toggle(props.product, 1)}
		backgroundColor={background} border={border} />

}