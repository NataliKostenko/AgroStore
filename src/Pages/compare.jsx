import H1 from '../Components/H1/H1';
import CompareItem from '../Components/Compare/CompareItem';
import Button from '../Components/Button/Button';
import BinIcon from '../Components/Icons/BinIcon';
import { useCompareContext } from '../Contexts/compareContext';

export default function Compare() {
	const compare = useCompareContext();

	return <div className='favouritesPage'>
		<H1 text={'Порівняти'} />
		{compare.items.map((item, index) => <CompareItem key={index} product={item} />)}
		<hr></hr>
		<div className='clear'>
			<Button img={<BinIcon />} onClick={() => compare.clear()} text='видалити все' /></div>
	</div>
}