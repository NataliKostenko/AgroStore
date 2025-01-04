
import './circle.css'
import Counter from '../counter/counter';

export default function Circle(props) {
	const style = {
		border: props.border,
		borderColor: props.borderColor,
		boxShadow: props.boxShadow,
		backgroundColor: props.backgroundColor,
		color: props.color,
		fill: props.fill
	}

	let counter;
	if (props.counter > 0) {
		counter = <Counter count={props.counter} />
	}

	return <>
		<button type='button' className='circle' style={style} onClick={props.onClick} >
			{props.icon}
		</button>
		{counter}
	</>
}
