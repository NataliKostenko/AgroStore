import { ReactNode } from 'react';
import './circle.css'
import Counter from '../counter/counter';

export default function Circle(props: {
	border: string | undefined;
	boxShadow: string | undefined;
	link: string;
	icon: ReactNode;
	counter: number;
}) {
	const style = {
		border: props.border,
		boxShadow: props.boxShadow
	}

	let counter: any;
	if (props.counter > 0) {
		counter = <Counter count={props.counter} />
	}

	return <><a href={props.link}>
		<div className='circle' style={style}>
			{props.icon}
		</div></a>
		{counter}
	</>
}
