import './partners.css'
import H1 from '../H1/h1'
import Slider from '../slider/slider'

export default function Partners() {
	return (<div className='partners'>
		<H1 text={'Партнери'} />
		<Slider url={"../../partners.json"} width={0} height={0} autoPlay={false} autoPlayTime={0} number={0} slideNumber={0} slidesCount={0} />
	</div>
	)
}