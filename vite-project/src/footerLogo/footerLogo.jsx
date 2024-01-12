import './footerLogo.css'
import Logo from '/LogoFooter.png'

export default function FooterLogo() {
	return (
		<div className='footerLogo'>
			<img src={Logo} />
			<p className='footerLogoText'>
				Пропонуємо покупцям широкий вибір насіння овочів
			</p>
		</div>
	)
}