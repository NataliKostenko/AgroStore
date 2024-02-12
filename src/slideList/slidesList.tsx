import Slide from '../slide/slide';
import './slidesList.css';

export default function SlidesList(props: { slideNumber: number, items: any }) {

	return <div
		className="slide-list"
		style={{ transform: `translateX(-${props.slideNumber * 100}%)` }}>
		{
			props.items.map((slide: any, index: any) => (
				<Slide data={slide} key={index} />
			))}
	</div>
}