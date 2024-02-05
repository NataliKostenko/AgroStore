import './footer.css'
import FooterLogo from '../footerLogo/footerLogo'
import FooterInfo from '../footerInfo/footerInfo'
import Arrow from '../arrow/arrow'
import * as React from 'react'

export default function Footer() {
	return (
		<footer >
			<div className='footerBlock'>
				<FooterLogo />
				<FooterInfo />
			</div>
			<hr></hr>
			<p className='year'>© 2022 DAT</p>
			<Arrow angle={90} />
		</footer>
	)
}