import BinIcon from "./binIcon";

export default function ButtonDelete(props) {
	return <button type="button" className='deleteProduct' onClick={props.onClick} >
		<BinIcon />
	</button>
}
