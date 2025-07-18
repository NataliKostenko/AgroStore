import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './buttonBody.css';

export default function ButtonBody({ width, type = 'button', link, text, onClick }) {
	const style = { width };
	if (link && type !== 'submit') {
		return (
			<button type={type} className='buttonBody' style={style} onClick={onClick}>
				<Link to={link} className='aButtonBody' onClick={onClick}>
					{text}
				</Link>
			</button >
		);
	}
	return (
		<button type={type} className='buttonBody' style={style} onClick={onClick}>
			{text}
		</button>
	);
}

ButtonBody.propTypes = {
	width: PropTypes.string,
	type: PropTypes.string,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
