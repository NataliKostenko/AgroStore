import './plantsProtectingTools.css';
import H1 from '../../H1/h1';
import PlantsProtectingToolsItem from './plantsProtectingToolsItem';

export default function PlantsProtectingTools() {
	const items = [
		{
			url: './PlantsProtecting1.png',
			alt: 'protecting image',
			text: 'Гербіциди',
			link: './herbicides'
		},
		{
			url: './PlantsProtecting2.png',
			alt: 'protecting image',
			text: 'Фунгіциди',
			link: './fungicides'
		},
		{
			url: './PlantsProtecting3.png',
			alt: 'protecting image',
			text: 'Інсектициди',
			link: './Інсектициди'
		},
		{
			url: './PlantsProtecting4.png',
			alt: 'protecting image',
			text: 'Десиканти',
			link: './Десиканти'
		},
		{
			url: './PlantsProtecting5.png',
			alt: 'protecting image',
			text: 'Протруювачі',
			link: './Протруювачі'
		},
		{
			url: './PlantsProtecting6.png',
			alt: 'protecting image',
			text: 'Родентициди',
			link: './Родентициди'
		},
		{
			url: './PlantsProtecting7.png',
			alt: 'protecting image',
			text: 'Ретарданти',
			link: './Ретарданти'
		},
		{
			url: './PlantsProtecting8.png',
			alt: 'protecting image',
			text: 'Ад’юванти',
			link: './Ад’юванти'
		},
	]

	return <>
		<H1 text={'Засоби захисту рослин'} />
		<div className='plantsProtectingTools'>
			{items.map((item, index) => <PlantsProtectingToolsItem url={item.url} alt={item.alt} text={item.text} link={item.link} key={index} />)}
		</div>
	</>
}