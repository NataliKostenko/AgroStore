import { useState } from 'react';
import './filter.css';
import PropTypes from 'prop-types';

export default function FilterItem(props) {
	FilterItem.propTypes = {
		url: PropTypes.string,
		text: PropTypes.string
	}

	const [checked, setChecked] = useState(false);

	return <div className='filterItem'>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} id={props.url} />
		<label htmlFor={props.url} className='filterItemText'>{props.text}</label>
	</div>
}