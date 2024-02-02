/* eslint-disable react/prop-types */
//import PropTypes from "prop-types";
import './cardPartner.css'

export default function CardPartner(props) {
	return <div className='cardPartner'>
		<img src={props.url} alt={props.alt} />
	</div>
}

/* CardPartner.propTypes = {
	url: PropTypes.string,
	alt: PropTypes.string,
	type: PropTypes.string
} */