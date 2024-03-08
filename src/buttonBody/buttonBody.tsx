import { Link } from 'react-router-dom';
import './buttonBody.css'

export default function ButtonBody(props: {
	link: string;
	text: string
}) {
	return <button className='buttonBody'>
		<Link className='aButtonBody' to={props.link}>
			{props.text}
		</Link>
	</button>
}