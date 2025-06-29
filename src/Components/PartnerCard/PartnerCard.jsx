import './partnerCard.css';
import PropTypes from 'prop-types';

export default function PartnerCard(props) {
	PartnerCard.propTypes = {
		url: PropTypes.string,
		alt: PropTypes.string,
		title: PropTypes.string,
		text: PropTypes.string,
	}

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