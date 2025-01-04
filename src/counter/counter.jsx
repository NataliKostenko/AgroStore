import './counter.css'
export default function Counter({ count }) {
	return <div className='counter'>
		<div className='counterNum'>
			{count}
		</div>
	</div>
}
