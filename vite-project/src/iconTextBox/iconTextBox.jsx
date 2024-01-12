import './iconTextBox.css'

export default function IconTextBox(props) {
	return (
		<div className='phoneBlock'>
			{props.element}
			<div className='itemsPhone'>
				<a href={props.link}>{props.number}</a>
				<p>{props.text}</p>
			</div>
		</div>

	)
}