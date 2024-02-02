import PropTypes from "prop-types";
import './menu.css'
export default function Item(props) {
	return <li className='li'>
		<a href={props.link} className='a'>{props.item}
		</a></li>
}

Item.propTypes = {
	item: PropTypes.string,
	link: PropTypes.string
}