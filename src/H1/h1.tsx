import './h1.css';

export default function H1(props: { text: string; }) {

	return <div className='h1'>
		<img src='/decor.svg' />
		<h1> {props.text}</h1>
	</div>
}