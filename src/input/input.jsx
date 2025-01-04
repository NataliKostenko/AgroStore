import './input.css'
import { useState } from 'react';

export default function Input(props) {
	const [value, setValue] = useState('');

	return <input className="input"
		type={props.type}
		name={props.name}
		placeholder={props.placeholder}
		value={value} onChange={event => setValue(event.target.value)} />
}
