import './circle.css';
import PropTypes from 'prop-types';

export default function CircleCardProductItem(props) {
	CircleCardProductItem.propTypes = {
		border: PropTypes.string,
		boxShadow: PropTypes.string,
		onClick: PropTypes.func,
		icon: PropTypes.element
	}

	const style = {
		border: props.border,
		boxShadow: props.boxShadow
	}

	return <div className='circle' style={style} onClick={props.onClick}  >
		{props.icon}
	</div>

}
