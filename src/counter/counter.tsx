import './counter.css'

export default function Counter(props: CounterProps) {
	return <div className='counter'>
		<div className='counterNum'>
			{props.count}
		</div>
	</div>
}

export type CounterProps = {
	count: number;
};