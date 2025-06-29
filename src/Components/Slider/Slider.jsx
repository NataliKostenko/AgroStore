import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import PropTypes from 'prop-types';

const SlSlider = ({ dotsClass, children }) => {
	SlSlider.propTypes = {
		children: PropTypes.element,
		dotsClass: PropTypes.string
	}
	const settings = {
		dots: true,
		dotsClass: dotsClass,
		className: 'slider1',
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow:
			(<div className='circleArrow' >
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<g clipPath="url(#clip0_25_382)">
						<path d="M18.7979 8.5961C18.716 8.58282 18.6332 8.57669 18.5504 8.57777H4.44077L4.74843 8.43467C5.04917 8.29233 5.32275 8.09861 5.55694 7.86227L9.51363 3.90558C10.0347 3.40814 10.1223 2.6079 9.72112 2.00952C9.25422 1.37188 8.35882 1.23343 7.72113 1.70034C7.66962 1.73808 7.62065 1.77922 7.57464 1.82349L0.419694 8.97844C-0.139465 9.53698 -0.139957 10.443 0.418576 11.0022C0.418933 11.0025 0.419336 11.0029 0.419694 11.0033L7.57464 18.1582C8.13424 18.7163 9.04028 18.715 9.59837 18.1554C9.64228 18.1114 9.68329 18.0645 9.72112 18.0151C10.1223 17.4168 10.0347 16.6165 9.51363 16.1191L5.5641 12.1552C5.35415 11.9451 5.11275 11.7688 4.8486 11.6329L4.41931 11.4397H18.4716C19.2026 11.4669 19.844 10.9563 19.9813 10.2377C20.1078 9.4576 19.578 8.72265 18.7979 8.5961Z" fill="#84BE51" />
					</g>
					<defs>
						<clipPath id="clip0_25_382">
							<rect width="20" height="20" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>),
		prevArrow:
			(<div className='circleArrow'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
					<g clipPath="url(#clip0_25_382)">
						<path d="M18.7979 8.5961C18.716 8.58282 18.6332 8.57669 18.5504 8.57777H4.44077L4.74843 8.43467C5.04917 8.29233 5.32275 8.09861 5.55694 7.86227L9.51363 3.90558C10.0347 3.40814 10.1223 2.6079 9.72112 2.00952C9.25422 1.37188 8.35882 1.23343 7.72113 1.70034C7.66962 1.73808 7.62065 1.77922 7.57464 1.82349L0.419694 8.97844C-0.139465 9.53698 -0.139957 10.443 0.418576 11.0022C0.418933 11.0025 0.419336 11.0029 0.419694 11.0033L7.57464 18.1582C8.13424 18.7163 9.04028 18.715 9.59837 18.1554C9.64228 18.1114 9.68329 18.0645 9.72112 18.0151C10.1223 17.4168 10.0347 16.6165 9.51363 16.1191L5.5641 12.1552C5.35415 11.9451 5.11275 11.7688 4.8486 11.6329L4.41931 11.4397H18.4716C19.2026 11.4669 19.844 10.9563 19.9813 10.2377C20.1078 9.4576 19.578 8.72265 18.7979 8.5961Z" fill="#84BE51" />
					</g>
					<defs>
						<clipPath id="clip0_25_382">
							<rect width="20" height="20" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					touchThreshold: 5,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					touchThreshold: 5,
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					touchThreshold: 5,
					arrows: false,
					dots: false
				}
			}
		]
	};

	return (
		<div className="slider-container">
			<Slider {...settings}>
				{children}
			</Slider >
		</div >
	);
};

export default SlSlider;