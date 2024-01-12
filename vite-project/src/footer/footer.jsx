import './footer.css'
import FooterLogo from '../footerLogo/footerLogo'
import FooterInfo from '../footerInfo/footerInfo'
import Arrow from '../arrow/arrow'

export default function Footer() {
	return (
		<footer >
			<div className='footerBlock'>
				<FooterLogo />
				<FooterInfo />
			</div>
			<hr></hr>
			<p className='year'>© 2022 DAT</p>
			<Arrow />
		</footer>
	)
}