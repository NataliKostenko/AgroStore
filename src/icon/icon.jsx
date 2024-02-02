import PropTypes from "prop-types";
import './icon.css'

export default function Icon(props) {
	const style = {
		border: props.border,
		boxShadow: props.boxShadow
	}
	return <><a href={props.link}>
		<div className='circle' style={style}>
			{props.svg}
		</div></a>
		{props.counter}</>
}
Icon.propTypes = {
	border: PropTypes.string,
	boxShadow: PropTypes.string,
	link: PropTypes.string,
	svg: PropTypes.any,
	counter: PropTypes.any
}