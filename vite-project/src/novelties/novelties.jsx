import './novelties.css'
import Slider from '../slider/slider'
import H1 from '../H1/h1'
import Card from '../card/card'
import Dots from '../dots/dots'

export default function Novelties() {
	const itemData = [
		{ url: '/petunya.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' },
		{ url: '/ckop.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '589' },
		{ url: '/ckop2.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '200' },
		{ url: '/xopyc.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' }
	];

	const dots = itemData.map((item, index) => <Dots item={itemData.length} key={index} />)

	const cards = itemData.map((item, index) => <Card url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} />)


	return <div className='novelties'>
		<H1 text={'Новинки'} />
		<Slider cards={cards} dots={dots} />
	</div>
}
