import './partnerCard.css'
export default function PartnerCard(props: { url: string; alt: string; title: string; text: string }) {
	return <div className='partnerCard'>
		<div className='partnerCardBlock'>
			<div className='partnerLogo'>
				<img src={props.url} alt={props.alt} />
			</div>
			<p className='partnerTitle'>{props.title}</p>
		</div>
		<p className='partnerText'>{props.text}</p>
	</div>
}