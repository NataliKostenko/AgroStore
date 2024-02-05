import './novelties.css'
import Slider from '../slider/slider'
import H1 from '../H1/h1'
import * as React from 'react'

export default function Novelties() {
	return <div className='novelties'>
		<H1 text={'Новинки'} />
		<Slider url={"../../products.json"} />
	</div>
}
