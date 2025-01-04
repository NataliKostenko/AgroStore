import IconTextBox from '../iconTextBox/iconTextBox';
export default function PhoneS(props) {
	return <IconTextBox
		icon={props.icon}
		mainText={props.numberPhone} color={'#fff'}
		secondaryText={props.text}
	/>
}

