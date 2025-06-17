import Input from "./Input";
import { useState } from 'react';
import './input.css';
import Loupe from '/loupe.svg';

export default function Search() {
	const [search, setSearch] = useState('');

	return (
		<search className="search">
			<Input value={search} type="search" placeholder="Пошук" setValue={setSearch} />
			<button className='buttonSearch' type="submit" > <img src={Loupe} /></button>
		</search >
	)
}