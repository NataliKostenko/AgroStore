import './cardPartner.css'

export default function CardPartner(props: { url: string; alt: string }) {
	return <div className='cardPartner'>
		<img src={props.url} alt={props.alt} />
	</div>
}

