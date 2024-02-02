import './partners.css'
import H1 from '../H1/h1'
import Slider from '../slider/slider'
/* import Card from '../card/card'
import Dots from '../dots/dots'
 */
export default function Partners() {

	/* const itemData = [
		{ url: '/adama.png', alt: 'photo' },
		{ url: '/basf.png', alt: 'photo' },
		{ url: '/dekalb.png', alt: 'photo' },
		{ url: '/lidea.png', alt: 'photo' },
		{ url: '/rodonit.png', alt: 'photo' }
	];

	const dots = itemData.map((item, index) => <Dots item={itemData.length} key={index} />)

	const cards = itemData.map((item, index) => <Card url={item.url} alt={item.alt} key={index} />)
 */


	return (<div className='partners'>
		<H1 text={'Партнери'} />
		<Slider url={"../../partners.json"} />
	</div>
	)
}