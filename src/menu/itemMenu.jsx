import './menu.css'
export default function Item(data) {
	return <li className='li'>
		<a className='a'>{data.item}
		</a></li>
}
