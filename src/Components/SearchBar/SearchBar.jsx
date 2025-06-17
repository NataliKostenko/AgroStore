import Logo from '../Logo/Logo';
import Search from '../../Components/Input/Search';
import Phone from '../Phone/Phone';
import './searchBar.css';
import IconBar from '../IconBar/IconBar';

export default function SearchBar() {
	return <div className='logoBlock'>
		<Logo />
		<Search />
		<Phone numberPhone={'+38(097)254-333'} text={'Замовити дзвінок'} />
		<IconBar />
	</div>
}