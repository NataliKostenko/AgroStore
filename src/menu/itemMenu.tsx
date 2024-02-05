import * as React from 'react'
import './menu.css'
export default function Item(props) {
	return <li className='li'>
		<a href={props.link} className='a'>{props.item}
		</a></li>
}

