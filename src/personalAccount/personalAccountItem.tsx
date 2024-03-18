import { Link } from 'react-router-dom';
import './personalAccountItem.css'

export default function PersonalAccountItem(props: { img: any; text: string; link: string }) {
	return <div className='personalAccountItem' >
		<div className='personalAccountItemBox'>
			{props.img}
			<Link to={props.link}>{props.text}</Link>
		</div>
	</div>
}