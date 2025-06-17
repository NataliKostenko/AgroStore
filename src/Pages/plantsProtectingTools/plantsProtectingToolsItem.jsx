import './plantsProtectingTools.css';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PlantsProtectingToolsItem(props) {
	PlantsProtectingToolsItem.propTypes = {
		link: PropTypes.string,
		url: PropTypes.string,
		alt: PropTypes.string,
		text: PropTypes.string,
	}
	return <Link to={props.link}>
		<div className='plantsProtectingToolsItem'>
			<img src={props.url} alt={props.alt}></img>
			<ButtonBody link={props.link} text={props.text} type={undefined} />
		</div>
	</Link>

}