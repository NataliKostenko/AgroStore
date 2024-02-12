import './iconTextBox.css'

export default function IconTextBox(props: { icon: any; mainText: string; secondaryText: string }) {
	return (
		<div className='iconTextBox'>
			{props.icon}
			<div className='textBox'>
				<p className="mainText">{props.mainText}</p>
				<p className="secondaryText" >{props.secondaryText}</p>
			</div>
		</div>
	)
}
