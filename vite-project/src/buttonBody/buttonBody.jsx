import './buttonBody.css'

export default function ButtonBody(props) {
	return <button className='buttonBody'>
		<a className='aButtonBody' href={props.link}>
			{props.text}
		</a>
	</button>
}