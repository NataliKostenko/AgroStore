import Icon from '../circle/circle';
import IconTextBox from '../iconTextBox/iconTextBox';
import MapIcon from '../mapIcon'

export default function MapBox(props) {
	return (
		<IconTextBox
			icon={< Icon link={'#'} icon={<MapIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.adress} secondaryText={''}
		/>
	)
}