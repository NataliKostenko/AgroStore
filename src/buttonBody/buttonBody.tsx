import { Link } from 'react-router-dom';
import './buttonBody.css'

export default function ButtonBody(props: {
	link: string;
	text: string;
	type: any;
}) {
	return <button className='buttonBody' type={props.type}>
		<Link className='aButtonBody' to={props.link}>
			{props.text}
		</Link>
	</button>
}