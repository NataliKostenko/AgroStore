import '../index.css';
import Section1 from '../Components/Section1/Section1.jsx';
import About from './aboutPage/aboutPage.jsx';
import Promotions from '../Components/Promotions/Promotions.jsx';
import Partners from '../Components/Partners/Partners.jsx';
import Info from '../Components/Info/Info.jsx';
import Novelties from '../Components/Novelties/Novelties.jsx';

export default function Home() {
	return <>
		<Section1 />
		<div className='backgroundMain'>
			<About />
			<Novelties />
			<Promotions />
			<Partners />
			<Info />
		</div>
	</>
}
