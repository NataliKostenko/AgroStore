import './partners.css'
import H1 from '../H1/h1'
import Slider from '../slider/slider'

export default function Partners() {
	return (<div className='partners'>
		<H1 text={'Партнери'} />
		<Slider url={"../../partners.json"} number={undefined} slideNumber={undefined} slidesCount={undefined} />
	</div>
	)
}