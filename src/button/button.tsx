import './button.css'

export default function Button(props: {
	img: any;
	link: string;
	text: string
}) {
	return <button className='button'>
		{props.img}
		<a className='aButton' href={props.link}>
			{props.text}
		</a>
	</button>

}