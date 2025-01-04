import './plantsProtectingTools.css';
import ButtonBody from '../../buttonBody/buttonBody'
import { Link } from 'react-router-dom';

export default function PlantsProtectingToolsItem(props) {
	return <Link to={props.link}>
		<div className='plantsProtectingToolsItem'>
			<img src={props.url} alt={props.alt}></img>
			<ButtonBody link={props.link} text={props.text} type={undefined} />
		</div>
	</Link>

}