import './buttonBody.css'

export default function ButtonBody(props: {
	link: any;
	text: string
}) {
	return <button className='buttonBody'>
		<a className='aButtonBody' href={props.link}>
			{props.text}
		</a>
	</button>
}