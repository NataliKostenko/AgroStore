import Circle from './Circle/Circle';
import IconTextBox from './IconTextBox/IconTextBox';
import MapIcon from './Icons/MapIcon';
import PropTypes from 'prop-types';

export default function MapBox(props) {
	MapBox.propTypes = {
		adress: PropTypes.string
	}
	return (
		<IconTextBox
			icon={< Circle link={'#'} icon={<MapIcon />} border={undefined} boxShadow={undefined} counter={0} />}
			mainText={props.adress} secondaryText={''}
		/>
	)
}