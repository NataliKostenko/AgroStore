import Icon from '../circle/circle';
import IconTextBox from '../iconTextBox/iconTextBox';
import PhoneIcon from '../phoneIcon';
export default function Phone(props) {
	return <IconTextBox
		icon={< Icon link={'#'} icon={<PhoneIcon />} border={undefined} boxShadow={undefined} counter={0} />}
		mainText={props.numberPhone}
		secondaryText={props.text}
	/>
}

