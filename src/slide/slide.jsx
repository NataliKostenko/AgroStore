/* eslint-disable react/prop-types */
import CardProduct from "../cardProduct/cardProduct";
import CardPartner from "../cardPartner/cardPartner";
import './slide.css';
//import { useState, useEffect } from "react";
export default function Slide(props) {

	const cards = new Array();
	for (let index = 0; index < props.data.length; index++) {
		const item = props.data[index];
		if (item.type == "goods") {

			cards.push(<CardProduct url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} type={""} />);
		}
		else {
			cards.push(<CardPartner url={item.url} alt={item.alt} key={index} />);
		}
	}
	cards.length = 4;
	return <div className="slide">
		{cards}
	</div>
}
/* const [items, setItems] = useState([]);

useEffect(() => {
	const loadData = async () => {
		if (!props.url) throw new Error('URL must be provided.');
		const items = await fetch(props.url)
			.then((items) => items.json());
		setItems(items);
	};
	loadData();
}, []);



return <div className="slide">
	{items.map((item, index) => <CardProduct url={item.url} alt={item.alt} name={item.name} cost={item.cost} key={index} type={""} />)}
</div>
}   */