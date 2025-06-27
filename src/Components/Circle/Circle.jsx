
import './circle.css';
import Counter from '../Counter/Counter';
import PropTypes from 'prop-types';

export default function Circle(props) {
	Circle.propTypes = {
		border: PropTypes.string,
		boxShadow: PropTypes.string,
		backgroundColor: PropTypes.string,
		color: PropTypes.string,
		fill: PropTypes.string,
		counter: PropTypes.number,
		onClick: PropTypes.func,
		icon: PropTypes.element
	}

	const style = {
		border: props.border,
		boxShadow: props.boxShadow,
		backgroundColor: props.backgroundColor,
		color: props.color,
		fill: props.fill
	}

	let counter;
	if (props.counter > 0) {
		counter = <Counter count={props.counter} />
	}

	return <>
		<button type='button' className='circle' style={style} onClick={props.onClick} >
			{props.icon}
		</button>
		{counter}
	</>
}
