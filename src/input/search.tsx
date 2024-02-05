import Input from "./input"
import { useState } from 'react';
import './input.css'
import Loupe from '/loupe.svg'
import * as React from "react";

export default function Search() {
	const [search, setSearch] = useState('');

	return (
		<div className="search">
			<Input value={search} type="text" placeholder="Пошук" setValue={setSearch} />
			<img src={Loupe} />
		</div>
	)
}