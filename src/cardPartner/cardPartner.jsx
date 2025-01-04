import './cardPartner.css'

export default function CardPartner(props) {
	return <div className='cardPartner'>
		<img src={props.url} alt={props.alt} />
	</div>
}

