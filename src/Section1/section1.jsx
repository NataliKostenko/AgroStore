import './section1.css';
import Header from '../header/header';
// import Head from '/head.png'
import ImgSection1 from '../imgSection1/imgSection1';
import Section1BlockText1 from '../Section1BlockText1/section1BlockText1';

export default function Section1() {
	return <div className='background'>
		<Header />
		<div className='headBlock'>
			<Section1BlockText1 />
			<ImgSection1 />
		</div>
	</div>
}
