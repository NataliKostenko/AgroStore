import PropTypes from 'prop-types';

export default function ImgItem(props) {
	ImgItem.propTypes = {
		img: PropTypes.element
	}
	return (
		<div className='imgItem'>
			{props.img}
		</div>
	)
}