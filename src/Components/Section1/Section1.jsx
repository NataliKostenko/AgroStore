import './section1.css';
import ImgSection1 from '../ImgSection1/ImgSection1';
import Section1BlockText1 from '../Section1BlockText1/Section1BlockText1';

export default function Section1() {
	return <div className='background'>
		<div className='headBlock'>
			<Section1BlockText1 />
			<ImgSection1 />
		</div>
	</div>
}
