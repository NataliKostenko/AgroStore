import './footer.css'
import FooterLogo from '../footerLogo/footerLogo'
import FooterInfo from '../footerInfo/footerInfo'
import Arrow from '../arrow/arrow'
import { MouseEvent } from 'react'

export default function Footer() {
	return (
		<footer >
			<div className='footerBlock'>
				<FooterLogo />
				<FooterInfo />
			</div>
			<hr></hr>
			<p className='year'>© 2022 DAT</p>
			<Arrow angle={90} clickHandler={function (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
				throw new Error('Function not implemented.')
			}} />
		</footer>
	)
}