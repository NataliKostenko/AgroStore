import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*import '../slider/slider.css';
import Slider1 from '../slider/slider';
import Card from '../card/card'
import Dots from '../dots/dots'
import Arrow from '../arrow/arrow' */

export default function SimpleCarousel() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	/* const itemData = [
		{ url: '/petunya.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' },
		{ url: '/ckop.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '589' },
		{ url: '/ckop2.png', alt: 'photo', name: 'Скор 250 ЕС к.э.', cost: '200' },
		{ url: '/xopyc.png', alt: 'photo', name: 'Петунія Софістика F1', cost: '20' }
	];

	const dots = itemData.map((item, index) => <Dots item={itemData.length} key={index} />)

	const cards = itemData.map((item, index) => <Card url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} />)
 */

	return (
		<Slider {...settings} >
			<div>
				<img src='https://via.placeholder.com/350x150' alt='slide-1' />
			</div>
			<div>
				<img src='https://via.placeholder.com/350x150' alt='slide-2' />
			</div>
			<div>
				<img src='https://via.placeholder.com/350x150' alt='slide-3' />
			</div>
		</Slider>
	);
}
