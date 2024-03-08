import './plantsProtectingTools.css';
import ButtonBody from '../../buttonBody/buttonBody'

export default function PlantsProtectingToolsItem(props: { url: string; alt: string; text: string; link: string }) {
	return <>
		<div className='plantsProtectingToolsItem'>
			<img src={props.url} alt={props.alt}></img>
			<ButtonBody link={props.link} text={props.text} />
		</div>
	</>
}