import './promotions.css';
import H1 from '../H1/h1'
import ButtonBody from "../buttonBody/buttonBody";
import Slider from '../slider/slider';

export default function Promotions() {
	return <div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<Slider url={"../../products.json"} width={0} height={0} autoPlay={false} autoPlayTime={0} number={0} slideNumber={0} slidesCount={0} />
		<ButtonBody text={'Дивитися усі товари'} link={''} />
	</div>
}