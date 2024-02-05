import * as React from 'react';
import Item from './itemMenu'

export default function Menu() {

	const items = ['Про нас', 'Каталог продукції', 'Оплата і доставка', 'Партнери', 'Новини', 'Контакти', 'Вхід', 'Реестрація'];

	return <div className='menu'>
		<ul className='menuList'>
			{items.map((item, index) => <Item item={item} key={index} />)}
		</ul>
	</div>
}