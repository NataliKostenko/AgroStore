import H1 from "../../H1/h1";
import Button from '../../button/button';
import CartIcon from '../../cartIcon';
import './order.css';

export default function OrderFinal() {

	return <section className="orderFinalBg">
		<div className="orderPage orderFinalWrap">
			<H1 text={'Дякуємо за замовлення'} />
			<p className="orderFinalp">Наш менеджер зв’яжеться з вами та відправить ваше замовлення</p>
			<div className="orderFinalButtonBlock">
				<Button img={<CartIcon />} link='/catalog' text='Продовжити покупку' />
				<Button link='/' text='Повернутися на головну' />
			</div>
		</div>

	</section>

}