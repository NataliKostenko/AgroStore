import './partners.css'
import H1 from '../H1/h1'
import Slider from '../slider/slider'
import * as React from 'react'

export default function Partners() {
	return (<div className='partners'>
		<H1 text={'Партнери'} />
		<Slider url={"../../partners.json"} />
	</div>
	)
}