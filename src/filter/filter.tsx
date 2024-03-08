import { useEffect, useState } from "react";
import FilterItem from "./filterItem";
import './filter.css';

export default function Filter(props: { url: string }) {
	const [items, setItems] = useState<{ url: string; text: string }[]>([]);

	useEffect(() => {
		const loadData = async () => {
			if (!props.url) throw new Error('URL must be provided.');
			const items = await fetch(props.url)
				.then((items) => items.json());
			setItems(items);
		};
		loadData();
	}, []);
	return <div>
		{items.map((item, index) => <FilterItem key={props.url + index.toString()} text={item.text} />)}
	</div>
}