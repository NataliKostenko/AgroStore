import './personalAccountPanel.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PersonalAccountPanelItem(props) {
	PersonalAccountPanelItem.propTypes = {
		link: PropTypes.string,
		img: PropTypes.element,
		text: PropTypes.string
	}
	return <div className='accountMenuItem'>{props.img}
		<Link to={props.link}>
			{props.text}
		</Link></div>
}