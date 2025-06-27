import { Link } from 'react-router-dom';
import './button.css';
import PropTypes from 'prop-types';

export default function Button(props) {
	Button.propTypes = {
		onClick: PropTypes.func,
		img: PropTypes.func,
		link: PropTypes.string,
		text: PropTypes.string
	}
	return <button className='button' onClick={props.onClick}>
		{props.img}
		<Link to={props.link} className='aButton' >
			{props.text}
		</Link>
	</button>

}