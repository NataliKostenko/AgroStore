import './imgSection1.css'
import Leaf1 from '/leaf1.png'
import Leaf2 from '/leaf2.png'
import Leaf3 from '/leaf3.png'
export default function ImgSection1() {
	return <div className='imgHead'>
		<img src={Leaf3} className='leaf3' />
		<img src={Leaf1} className='leaf1' />
		<img src={Leaf2} className='leaf2' />
	</div>
}