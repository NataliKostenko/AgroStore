import BinIcon from './Icons/BinIcon';
import PropTypes from 'prop-types';

export default function ButtonDelete(props) {
	ButtonDelete.propTypes = {
		onClick: PropTypes.func,
	}
	return <button type="button" className='deleteProduct' onClick={props.onClick} >
		<BinIcon />
	</button>
}
