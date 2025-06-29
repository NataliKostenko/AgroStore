import { Link } from 'react-router-dom';
import './personalAccountItem.css';
import PropTypes from 'prop-types';

export default function PersonalAccountItem(props) {
	PersonalAccountItem.propTypes = {
		link: PropTypes.string,
		img: PropTypes.element,
		text: PropTypes.string
	}
	return <Link to={props.link}>
		<div className='personalAccountItem' >
			<div className='personalAccountItemBox'>
				{props.img}
				{props.text}
			</div>
		</div></Link>
}