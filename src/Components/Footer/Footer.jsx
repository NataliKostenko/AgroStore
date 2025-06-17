import './footer.css';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterInfo from '../FooterInfo/FooterInfo';
import Arrow from '../Arrow/Arrow';

export default function Footer() {
	return <footer >
		<div className='footerBlock'>
			<FooterLogo />
			<FooterInfo />
		</div>
		<hr></hr>
		<p className='year'>© 2024 DAT</p>
		<a href='#'><Arrow angle={90} /></a>
	</footer>
}