import H1 from '../../Components/H1/H1';
import './shoppingCart.css';
import CartIcon from '../../Components/Icons/CartIcon';
import Button from '../../Components/Button/Button';
import OrderIcon from '../../Components/Icons/OrderIcon';
import CartItem from '../../Components/CartItem';
import BinIcon from '../../Components/Icons/BinIcon';
import { useCartContext } from '../../Contexts/shoppingCartContext';

export default function ShoppingCart() {
	const cart = useCartContext();

	return <div className='shoppingCart'>
		<H1 text={'Кошик'} />
		{cart.items.map((item, index) => <CartItem key={index} product={item} />)}
		<div className='productCost total'>
			{cart.getTotalAmount()} грн.
		</div>
		<hr></hr>
		<div className='buttonBlock'>
			<Button img={<CartIcon />} link='/catalog' text='Продовжити покупку' />
			<Button img={<OrderIcon />} link='/order' text='оформити замовлення' />
			<Button img={<BinIcon />} onClick={() => cart.clear()} text='видалити все' />
		</div>
	</div>
}
