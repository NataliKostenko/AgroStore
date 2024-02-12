import './imgItem.css'

export default function ImgItem(props: { img: any }) {
	return (
		<div className='imgItem'>
			{props.img}
		</div>
	)
}