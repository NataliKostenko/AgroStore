import './details.css';
import TabsPanel from '../tabsPanel/tabsPanel';
import FavouritButton from '../Pages/favourites/favouritButton';
import CompareButton from '../Pages/compare/compareButton';
import CartIcon from '../cartIcon';
import PhoneIcon from '../phoneIcon';
import Button from '../button/button';
import { useLoaderData } from 'react-router-dom';
import PaymentBox from '../paymentBox/paymentBox';
import { useCartContext } from '../shoppingCartContext';

export default function Details() {
	const data = useLoaderData();
	const cart = useCartContext();
	return <div className='aboutProduct'>
		<div className='infoProduct'>
			<div className='pictureProduct'>
				<img src={data.url} alt={data.alt} />
			</div>
			<div className='activProduct'>
				<h3>{data.name}</h3>
				<div className='availableProduct'>
					<p>{data.stocked}</p>
					<p> {data.cost} грн/{data.unit}</p>
				</div>
				<div className='boxOrderProduct'>
					<div className='manufacturerPaymentBox'>
						<div className='manufacturer'>
							<p className='titleBox'>Виробник</p>
							<div className='manufacturerName'>
								<img src={data.logo} alt={data.alt} />
								<p className='textBoxOrderProduct'> {data.manufacturer}</p>
							</div>
						</div>
						<div className='payment'>
							<p className='titleBox'>Оплата</p>
							<PaymentBox />
						</div>
					</div>
					<div className='delivery'>
						<p className='titleBox'>Доставка</p>
						<p className='textBoxOrderProduct'>Завтра відповідно до тарифів перевізника</p>
						<Button img={<PhoneIcon />} link='#' text='Замовити дзвінок' />
					</div>
				</div>
				<div className='iconBoxProduct'>
					<div className='costBoxProduct'>
						<div className='costProduct'>
							{data.cost * data.amount} грн.
						</div>
						<p>Ціна за {data.amount} {data.unit} </p>
					</div>
					<div className='activProductIcon'>
						<Button img={<CartIcon />} link='#' onClick={() => cart.append(data, 1)} text='Купити' />
						<FavouritButton product={data} />
						<CompareButton product={data} />
					</div>
				</div>
			</div>
		</div>
		<TabsPanel />
	</div>
}