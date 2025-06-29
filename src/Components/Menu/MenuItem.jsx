import { Link } from 'react-router-dom';
import './menu.css';
import PropTypes from 'prop-types';

export default function MenuItem(props) {
	MenuItem.propTypes = {
		itemLink: PropTypes.string,
		itemName: PropTypes.string
	}
	return <li className='li'>
		<Link to={props.itemLink} className='a'>{props.itemName}
		</Link></li>
}

