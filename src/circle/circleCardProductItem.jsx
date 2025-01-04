import './circle.css';

export default function CircleCardProductItem(props) {
	const style = {
		border: props.border,
		boxShadow: props.boxShadow
	}

	return <div className='circle' style={style} onClick={props.onClick}  >
		{props.icon}
	</div>

}
