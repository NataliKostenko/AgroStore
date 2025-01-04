import { Link } from 'react-router-dom';
import './personalAccountItem.css'

export default function PersonalAccountItem(props) {
	return <Link to={props.link}>
		<div className='personalAccountItem' >
			<div className='personalAccountItemBox'>
				{props.img}
				{props.text}
			</div>
		</div></Link>
}