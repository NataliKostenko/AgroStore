import './personalAccountPanel.css'
import { Link } from 'react-router-dom';

export default function PersonalAccountPanelItem(props) {
	return <>
		<div className='accountMenuItem'>{props.img}
			<Link to={props.link}>
				{props.text}
			</Link></div>
	</>
}