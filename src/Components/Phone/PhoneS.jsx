import IconTextBox from '../IconTextBox/IconTextBox';
import PropTypes from 'prop-types';

export default function PhoneS(props) {
	PhoneS.propTypes = {
		icon: PropTypes.element,
		numberPhone: PropTypes.string,
		text: PropTypes.string
	}
	return <IconTextBox
		icon={props.icon}
		mainText={props.numberPhone} color={'#fff'}
		secondaryText={props.text}
	/>
}

