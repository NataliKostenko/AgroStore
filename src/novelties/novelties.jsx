import './novelties.css';
import Slider from '../slider/slider';
import H1 from '../H1/h1';

export default function Novelties() {
	return <div className='novelties'>
		<H1 text={'Новинки'} />
		<Slider url={"../../Data/products.json"} />
		{/* width={0} height={0} autoPlay={false} autoPlayTime={0} number={0} slideNumber={0} slidesCount={0}  */}
	</div>
}
