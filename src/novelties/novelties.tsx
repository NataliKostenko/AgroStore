import './novelties.css'
import Slider from '../slider/slider'
import H1 from '../H1/h1'

export default function Novelties() {
	return <div className='novelties'>
		<H1 text={'Новинки'} />
		<Slider url={"../../products.json"} number={undefined} slideNumber={undefined} slidesCount={undefined} />
	</div>
}
