import './circle.css'
import Counter from '../counter/counter';

export default function Circle(props) {
	const style = {
		border: props.border,
		boxShadow: props.boxShadow
	}

	let counter;
	if (props.counter > 0) {
		counter = <Counter count={props.counter} />
	}

	return <>
		<div className='circle' style={style}>
			{props.icon}
		</div>
		{counter}
	</>
}
