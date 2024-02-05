/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import { useContext } from "react";
// import { SliderContext } from '../slider/slider';


import * as React from 'react'
import './dot.css'

/* export default function Dot({ number }) {
	const { goToSlide, slideNumber } = useContext(SliderContext);
	return (
		<div className={`dot ${slideNumber === number ? "selected" : ""}`}
			onClick={() => goToSlide(number)}></div>

	)
}
 */
export default function Dot(props) {
	return <div className='dot'
		onClick={props.handler}
	>
	</div>
}