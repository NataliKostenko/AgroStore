import './cardPartner.css';
import PropTypes from 'prop-types';

export default function CardPartner(props) {
	CardPartner.propTypes = {
		url: PropTypes.string,
		alt: PropTypes.string
	}

	return <div className='cardPartner'>
		<img src={props.url} alt={props.alt} />
	</div>
}

