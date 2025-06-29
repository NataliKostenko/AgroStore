import { useState, useEffect } from 'react';
import './filter.css';
import PropTypes from 'prop-types';

export default function FilterItem({ id, text, onChange }) {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		onChange(id, checked);
	}, [checked]);

	return (
		<div className='filterItem'>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(prev => !prev)}
				id={id}
			/>
			<label htmlFor={id} className='filterItemText'>{text}</label>
		</div>
	);
}

FilterItem.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};
