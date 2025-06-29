import './input.css';
import PropTypes from 'prop-types';

export default function Input({ value, setValue, placeholder, type = "text" }) {
	Input.propTypes = {
		value: PropTypes.string.isRequired,
		setValue: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		type: PropTypes.string
	}

	return <input className="input"
		type={type}
		value={value}
		placeholder={placeholder}
		onChange={(e) => setValue(e.target.value)} />
}
