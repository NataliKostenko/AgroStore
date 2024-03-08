import { useState } from 'react';
import './filter.css';

export default function FilterItem(props: { text: string; key: string }) {
	const [checked, setChecked] = useState(false);

	return <div className='filterItem'>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} id={props.key} />
		<label htmlFor={props.key} className='filterItemText'>{props.text}</label>
	</div>
}