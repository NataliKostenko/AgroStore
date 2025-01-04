import { useState } from 'react';
import './filter.css';

export default function FilterItem(props) {
	const [checked, setChecked] = useState(false);

	return <div className='filterItem'>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} id={props.url} />
		<label htmlFor={props.url} className='filterItemText'>{props.text}</label>
	</div>
}