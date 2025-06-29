import './promotions.css';
import H1 from '../H1/H1';
import ButtonBody from "../ButtonBody/ButtonBody";
import Slider from '../Slider/Slider';
import products from "../../../Data/products1.json";
import CardProduct from "../CardProduct/CardProduct";

export default function Promotions() {
	const cards = products.map((item) => (
		<div key={item.id}>
			<CardProduct
				url={item.url}
				name={item.name}
				stocked={item.stocked}
				cost={item.cost}
				amount={item.amount}
				unit={item.unit} />
		</div>));
	return <div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<Slider dotsClass={'dots2'}>{cards}</Slider>
		<ButtonBody text={'Дивитися усі товари'} link={'/promotions'} type={undefined} />
	</div>
}