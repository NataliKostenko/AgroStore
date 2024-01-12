import './button.css'

export default function Button(props) {
	return <button className='button'>
		{props.img}
		<a className='aButton' href={props.link}>
			{props.text}
		</a>
	</button>

}