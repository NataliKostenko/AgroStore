import './input.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
	Input.propTypes = {
		type: PropTypes.string,
		name: PropTypes.string,
		placeholder: PropTypes.string
	}

	const [value, setValue] = useState('');

	return <input className="input"
		type={props.type}
		name={props.name}
		placeholder={props.placeholder}
		value={value} onChange={event => setValue(event.target.value)} />
}
