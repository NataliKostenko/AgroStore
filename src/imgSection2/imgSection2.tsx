import * as React from 'react'
import './imgSection2.css'
import Leaf1 from '/leaf1.png'
import Leaf2 from '/leaf2.png'

export default function ImgSection2() {
	return <div className='imgSection2'>
		<img src={Leaf1} className='leaf1Section2' />
		<img src={Leaf2} className='leaf2Section2' />
	</div>
}