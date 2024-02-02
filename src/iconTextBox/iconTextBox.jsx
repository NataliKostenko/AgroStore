import PropTypes from "prop-types";
import './iconTextBox.css'

export default function IconTextBox(props) {
	return (
		<div className='phoneBlock'>
			{props.element}
			<div className='itemsPhone'>
				<p className="numberPhone">{props.number}</p>
				<p className="textPhone" >{props.text}</p>
			</div>
		</div>

	)
}
IconTextBox.propTypes = {
	element: PropTypes.any,
	link: PropTypes.string,
	number: PropTypes.string,
	text: PropTypes.string
}
