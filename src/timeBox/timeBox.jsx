import Icon from '../circle/circle';
import IconTextBox from '../iconTextBox/iconTextBox';
import TimeIcon from '../timeIcon'

export default function TimeBox(props) {
	return (
		<IconTextBox
			icon={< Icon link={'#'} icon={<TimeIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.day} secondaryText={props.time}
		/>
	)
}