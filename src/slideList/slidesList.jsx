import Slide from '../slide/slide';
import './slidesList.css';

export default function SlidesList(props) {

	return <div
		className="slide-list"
		style={{ transform: `translateX(-${props.slideNumber * 100}%)` }} >
		{
			props.items.map((slide, index) => (
				<Slide data={slide} key={index} />
			))}
	</div>
}