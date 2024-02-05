import Menu from '../menu/menu';
import SearchBar from '../searchBar/searchBar';
import ButtonBar from '../buttonBar/buttonBar';
import * as React from 'react';

export default function Header() {

	return (<>
		<Menu />
		<SearchBar />
		<ButtonBar />
	</>
	)
}