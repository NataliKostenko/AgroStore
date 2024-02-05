import * as React from 'react'
import './imgItem.css'

export default function ImgItem(props) {
	return (
		<div className='imgItem'>
			{props.img}
		</div>
	)
}