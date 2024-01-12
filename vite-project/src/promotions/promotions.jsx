import Slider from "../slider/slider";
import './promotions.css';
import H1 from '../H1/h1'
import ButtonBody from "../buttonBody/buttonBody";
import Card from '../card/card'
import Dots from '../dots/dots'

export default function Promotions() {

	const itemData = [
		{ url: '/petunya.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' },
		{ url: '/ckop.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '589' },
		{ url: '/ckop2.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '200' },
		{ url: '/xopyc.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' }
	];

	const cards = itemData.map((item, index) => <Card url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} />)
	const dots = itemData.map((item, index) => <Dots item={itemData.length} key={index} />)
	return (<div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<Slider cards={cards} dots={dots} />
		<ButtonBody text={'Дивитися усі товари'} />

	</div>

	)
}