import { Link } from 'react-router-dom';
import './buttonBody.css';
import PropTypes from 'prop-types';

export default function ButtonBody(props) {
	const style = {
		width: props.width
	}
	ButtonBody.propTypes = {
		width: PropTypes.number,
		type: PropTypes.string,
		link: PropTypes.string,
		text: PropTypes.string,
	}
	return <button className='buttonBody' type={props.type} style={style} >
		<Link className='aButtonBody' to={props.link}>
			{props.text}
		</Link>
	</button>
}