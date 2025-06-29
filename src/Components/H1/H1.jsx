import './h1.css';
import PropTypes from 'prop-types';

export default function H1(props) {
	H1.propTypes = {
		text: PropTypes.string
	}
	return <div className='h1'>
		<img src='/decor.svg' />
		<h1> {props.text}</h1>
	</div>
}