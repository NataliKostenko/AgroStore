import './tabButton.css';

export default function TabButton({
	children,
	isActive,
	onClick }) {
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

