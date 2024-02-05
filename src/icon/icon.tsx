import * as React from 'react'
import './icon.css'

export default function Icon(props: { border: any; boxShadow: any; link: string; svg: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal; counter: any }) {
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
