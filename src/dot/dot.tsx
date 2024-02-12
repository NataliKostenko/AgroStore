import { MouseEventHandler } from 'react'
import './dot.css'

export default function Dot(props: { handler: MouseEventHandler<HTMLDivElement> }) {
	return <div className='dot'
		onClick={props.handler}
	>
	</div>
}