import './iconTextBox.css';
import PropTypes from 'prop-types';

export default function IconTextBox(props) {
	IconTextBox.propTypes = {
		color: PropTypes.string,
		icon: PropTypes.element,
		mainText: PropTypes.string,
		secondaryText: PropTypes.string
	}

	const style = {
		color: props.color
	}

	return (
		<div className='iconTextBox'>
			{props.icon}
			<div className='textBox'>
				<p className="mainText" style={style}>{props.mainText}</p>
				<p className="secondaryText" >{props.secondaryText}</p>
			</div>
		</div>
	)
}
