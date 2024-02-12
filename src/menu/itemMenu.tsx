import './menu.css'

export default function Item(props: { link: string; itemName: string }) {
	return <li className='li'>
		<a href={props.link} className='a'>{props.itemName}
		</a></li>
}

