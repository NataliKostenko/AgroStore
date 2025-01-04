import { Link } from 'react-router-dom';
import './buttonBody.css'

export default function ButtonBody(props) {

	const style = {
		width: props.width
	}
	return <button className='buttonBody' type={props.type} style={style} >
		<Link className='aButtonBody' to={props.link}>
			{props.text}
		</Link>
	</button>
}