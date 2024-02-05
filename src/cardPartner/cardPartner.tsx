/* eslint-disable react/prop-types */
//import PropTypes from "prop-types";
import React from 'react';
import './cardPartner.css'

export default function CardPartner(props: { url: string; alt: string }) {
	return <div className='cardPartner'>
		<img src={props.url} alt={props.alt} />
	</div>
}

/* CardPartner.propTypes = {
	url: PropTypes.string,
	alt: PropTypes.string,
	type: PropTypes.string
} */