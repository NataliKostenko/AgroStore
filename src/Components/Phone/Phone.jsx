import Circle from '../Circle/Circle';
import IconTextBox from '../IconTextBox/IconTextBox';
import PhoneIcon from '../Icons/PhoneIcon';
import PropTypes from 'prop-types';

export default function Phone(props) {
	Phone.propTypes = {
		numberPhone: PropTypes.number,
		text: PropTypes.string
	}
	return <IconTextBox
		icon={< Circle link={'#'} icon={<PhoneIcon />} border={undefined} boxShadow={undefined} counter={0} />}
		mainText={props.numberPhone}
		secondaryText={props.text}
	/>
}

