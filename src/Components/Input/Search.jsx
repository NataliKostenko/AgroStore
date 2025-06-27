import Input from "./Input";
import { useState, useEffect, useContext } from 'react';
import './input.css';
import Loupe from '/loupe.svg';
import { SearchContext } from '../../Contexts/searchContext';

export default function Search() {
	const [localQuery, setLocalQuery] = useState('');
	const { setSearchQuery } = useContext(SearchContext);

	useEffect(() => {
		const delay = setTimeout(() => {
			setSearchQuery(localQuery);
		}, 300);

		return () => clearTimeout(delay);
	}, [localQuery, setSearchQuery]);

	return (
		<div className="search">
			<Input
				value={localQuery}
				type="search"
				placeholder="Пошук"
				setValue={setLocalQuery}
				onChange={(e) => setLocalQuery(e.target.value)}
			/>
			<button className='buttonSearch' type="button">
				<img src={Loupe} alt="search" />
			</button>
		</div>
	);
}		