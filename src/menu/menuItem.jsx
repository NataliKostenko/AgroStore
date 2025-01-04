import { Link } from 'react-router-dom';
import './menu.css'

export default function MenuItem(props) {
	return <li className='li'>
		<Link to={props.itemLink} className='a'>{props.itemName}
		</Link></li>
}

