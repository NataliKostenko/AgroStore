import './promotions.css';
import H1 from '../H1/h1';
import ButtonBody from "../buttonBody/buttonBody";
import SlSlider from '../slickSlider/sliderProm';

export default function Promotions() {
	return <div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<SlSlider />
		<ButtonBody text={'Дивитися усі товари'} link={'/promotions'} type={undefined} />
	</div>
}