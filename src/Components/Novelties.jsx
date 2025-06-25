import H1 from './H1/H1';
import Slider from './Slider/Slider';
import products from "../../Data/products1.json";
import CardProduct from "./CardProduct/CardProduct";

export default function Novelties() {
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

	return <div className='novelties'>
		<H1 text={'Новинки'} />
		<Slider dotsClass={'dots1'}>{cards}</Slider>
	</div>
}
