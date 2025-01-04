import './compare.css'
import H1 from '../../H1/h1';
import CompareItem from './compareItem';
import Button from '../../button/button';
import BinIcon from "../shoppingCart/binIcon";
import { useCompareContext } from '../../compareContext'

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