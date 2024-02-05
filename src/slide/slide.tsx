/* eslint-disable react/prop-types */
import CardProduct from "../cardProduct/cardProduct";
import CardPartner from "../cardPartner/cardPartner";
import './slide.css';
import React from "react";

export default function Slide(props) {
	const cards = new Array<any>();
	for (let index = 0; index < props.data.length; index++) {
		const item = props.data[index];
		if (item.type == "goods") {
			cards.push(<CardProduct url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} />);
		}
		else {
			cards.push(<CardPartner url={item.url} alt={item.alt} key={index} />);
		}
	}
	return <div className="slide">
		{cards}
	</div>
}
