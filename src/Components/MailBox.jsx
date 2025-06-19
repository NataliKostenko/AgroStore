import Circle from './Circle/Circle';
import IconTextBox from './IconTextBox/IconTextBox';
import MailIcon from './Icons/MailIcon';
import PropTypes from 'prop-types';

export default function MailBox(props) {
	MailBox.propTypes = {
		email: PropTypes.string
	}
	return (
		<IconTextBox
			icon={< Circle link={'#'} icon={<MailIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.email} secondaryText={''}
		/>
	)
}