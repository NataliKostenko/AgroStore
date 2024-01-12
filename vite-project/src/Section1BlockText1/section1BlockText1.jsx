import ButtonBody from '../buttonBody/buttonBody';
import H1 from '../H1/h1';
import './section1BlockText1.css'

export default function Section1BlockText1() {
	return <div className='headText'>
		<H1 text={'Аграрний'} />
		<div className='margin'>
			<h4>
				інтернет-магазин
			</h4>
			<p className='headTextItem'>
				Основна сфера діяльності – дистрибуція насіння, засобів захисту рослин, мінеральних макро - та мікродобрив
			</p>
			<ButtonBody text={'Про компанію'} />
		</div>
	</div>
}