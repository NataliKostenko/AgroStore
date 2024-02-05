import Slider from "../slider/slider";
import './promotions.css';
import H1 from '../H1/h1'
import ButtonBody from "../buttonBody/buttonBody";
import * as React from "react";

export default function Promotions() {
	return <div className="backgroundPromoutions promoutions">
		<H1 text={'Акції'} />
		<ButtonBody text={'Дивитися усі товари'} />
	</div>
}