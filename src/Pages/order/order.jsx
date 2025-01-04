import H1 from '../../H1/h1';
import ButtonBody from '../../buttonBody/buttonBody';
import './order.css';
import OrderCartItem from './orderCartItem'
import { useCartContext } from '../../shoppingCartContext';

export default function Order() {
	const cart = useCartContext();

	return <div className='orderPage'>
		<H1 text={'Оформлення замовлення'} />
		<div className='orderWrap'>
			<div className='orderForm'>
				<form className='dataAccountForm'>
					<h3>Ваші контакти</h3>
					<div>
						<input type='text' name='name' placeholder='Ім’я' className='name' />
						<input type='text' name='surname' placeholder='Прізвище' className='name' />
					</div>
					<div>
						<input type='text' name='phone' placeholder='Телефон' className='name' />
						<input type='text' name='mail' placeholder='E-mail' className='mail' />
					</div>
					<textarea name='feedback' placeholder='Коментар' />
				</form>
				<hr></hr>
				<form className='dataAccountForm'>
					<h3>Доставка</h3>
					<div>
						<select className='productPanelSelect name select' title='Область'>
							<option value="1">Область</option>
							<option value="1">Київська</option>
							<option value="2">Одеська</option>
							<option value="3">Львівська</option>
						</select>
						<select className='productPanelSelect name select' title='Місто'>
							<option value="1">Місто</option>
							<option value="1">Київ</option>
							<option value="2">Одеса</option>
							<option value="3">Львів</option>
						</select>
					</div>
					<div>
						<select className='productPanelSelect name select' title='Відділення'>
							<option value="1">Відділення</option>
							<option value="1">30</option>
							<option value="2">401</option>
							<option value="3">46</option>
						</select>
						<input type='text' name='index' placeholder='Поштовий індекс' className='name' />
					</div>
				</form>
				<hr></hr>
				<div className='selectPay'>
					<h3>Оплата:</h3>
					<label>
						<input type="radio" name="myRadio" value="option1" />
						Готівка
					</label>
					<label>
						<input
							type="radio"
							name="myRadio"
							value="option2"
							defaultChecked={true}
						/>
						Оплата карткою
					</label>
					<label>
						<input type="radio" name="myRadio" value="option3" />
						Оплата карткою онлайн
					</label>
				</div>
			</div>
			<div className='orderCart'>
				{cart.items.map((item, index) => <OrderCartItem key={index} product={item} />)}
				<div className='totalOrder'>
					<p>Pазом товарів: <span>{cart.getTotalQuantity()}</span></p>
					<p>До сплати: <span>{cart.getTotalAmount()} грн.</span></p>
				</div>
				<ButtonBody link='/orderFinal' type='button' text='Підтвердити замовлення' />
			</div>
		</div>
	</div>
}