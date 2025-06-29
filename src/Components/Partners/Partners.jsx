import './partners.css';
import H1 from '../H1/H1';
import Slider from '../Slider/Slider';
import partners from "../../../Data/partners.json";

export default function Partners() {
	const cards =
		partners.map((item) => (
			<div key={item.id}>
				<div className='cardPartner' >
					<img src={item.url} />
				</div>
			</div>
		))

	return <div className='partners'>
		<H1 text={'Партнери'} />
		<Slider dotsClass={'dots1'} >
			{cards}
		</Slider>
	</div>
}