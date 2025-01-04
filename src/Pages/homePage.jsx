
import Novelties from '../novelties/novelties.jsx'
import '../index.css'
import Section1 from '../Section1/section1.jsx'
import About from './aboutPage/aboutPage.jsx'
import Promotions from '../promotions/promotions.jsx'
import Partners from '../partners/partners.jsx'
import Info from '../info/info.jsx'

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
