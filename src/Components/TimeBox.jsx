import Circle from './Circle/Circle';
import IconTextBox from './IconTextBox/IconTextBox';
import TimeIcon from './Icons/TimeIcon';
import PropTypes from 'prop-types';

export default function TimeBox(props) {
	TimeBox.propTypes = {
		day: PropTypes.string,
		time: PropTypes.number
	}
	return (
		<IconTextBox
			icon={< Circle link={'#'} icon={<TimeIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.day} secondaryText={props.time}
		/>
	)
}