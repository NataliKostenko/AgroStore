import './tabButton.css';
import PropTypes from 'prop-types';

export default function TabButton({
	children,
	isActive,
	onClick }) {
	TabButton.propTypes = {
		children: PropTypes.any,
		isActive: PropTypes.bool,
		onClick: PropTypes.func
	}

	if (isActive) {
		return <button className='tabButtonActive'>{children}</button>
	}
	return (
		<button className='tabButton' onClick={() => {
			onClick();
		}}>
			{children}
		</button>
	)
}

