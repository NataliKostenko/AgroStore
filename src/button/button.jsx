import { Link } from 'react-router-dom';
import './button.css'

export default function Button(props) {
	return <button className='button' onClick={props.onClick}>
		{props.img}
		<Link to={props.link} className='aButton' >
			{props.text}
		</Link>
	</button>

}