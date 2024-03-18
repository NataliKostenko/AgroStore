import './personalAccountPanel.css'
import { Link } from 'react-router-dom';

export default function PersonalAccountPanelItem(props: { img: any; text: string; link: string }) {
	return <>
		<div className='accountMenuItem'>{props.img}
			<Link to={props.link}>
				{props.text}
			</Link></div>
	</>
}