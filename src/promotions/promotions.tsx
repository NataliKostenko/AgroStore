import './promotions.css';
import H1 from '../H1/h1'
import ButtonBody from "../buttonBody/buttonBody";

export default function Promotions() {
	return <div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<ButtonBody text={'Дивитися усі товари'} link={undefined} />
	</div>
}