import './counter.css';
import PropTypes from 'prop-types';

export default function Counter({ count }) {
	Counter.propTypes = {
		count: PropTypes.number
	}

	return <div className='counter'>
		<div className='counterNum'>
			{count}
		</div>
	</div>
}
