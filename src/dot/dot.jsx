import './dot.css'

export default function Dot(props) {
	return <div className='dot'
		onClick={props.handler}
	>
	</div>
}