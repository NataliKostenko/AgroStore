import './slider.css'
import Arrow from '../arrow/arrow'

export default function Slider(props) {

	return <div className='slider'>
		<div className='sliderBlock'>
			<Arrow />
			{props.cards}
			<Arrow transform={'rotate(180deg)'} />
		</div>
		<div className='dotBlock'>
			{props.dots}
		</div>
	</div>
}