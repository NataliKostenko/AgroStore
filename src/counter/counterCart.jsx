import { useState } from 'react';
import './counter.css'

export default function CounterCart() {
	const [number, setNumber] = useState(0);

	return <div className='caunterCart'>
		<button onClick={() => {
			setNumber(number - 1);
		}}>-</button>
		<h1>{number}</h1>
		<button onClick={() => {
			setNumber(number + 1);
		}}>+</button>
	</div>
}