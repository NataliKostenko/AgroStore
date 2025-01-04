import './iconTextBox.css'

export default function IconTextBox(props) {
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
