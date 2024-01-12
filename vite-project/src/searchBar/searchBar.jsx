import Logo from '../logo/logo'
import Search from '../input/search';
import Phone from '../phone/phone';
import './searchBar.css';
import IconBar from '../iconBar/iconBar';

export default function SearchBar() {
	return (
		<div className='logoBlock'>
			<Logo />
			<Search />
			<Phone />
			<IconBar />
		</div>)
}