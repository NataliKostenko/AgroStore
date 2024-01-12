import './input.css'
export default function Input({ value, setValue, type, placeholder }) {

	return <input className="input"
		value={value}
		onChange={event => setValue(event.target.value)}
		type={type}
		placeholder={placeholder}
	/>
};
