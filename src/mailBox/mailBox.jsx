import Icon from '../circle/circle';
import IconTextBox from '../iconTextBox/iconTextBox';
import MailIcon from '../mailIcon';

export default function MailBox(props) {
	return (
		<IconTextBox
			icon={< Icon link={'#'} icon={<MailIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.email} secondaryText={''}
		/>
	)
}