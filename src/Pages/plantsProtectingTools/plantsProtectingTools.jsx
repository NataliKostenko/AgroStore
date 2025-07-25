import './plantsProtectingTools.css';
import H1 from '../../Components/H1/H1';
import PlantsProtectingToolsItem from '../../Components/PlantsProtectingTools/PlantsProtectingToolsItem';

export default function PlantsProtectingTools() {
	const items = [
		{
			url: './PlantsProtecting1.webp',
			alt: 'protecting image',
			text: 'Гербіциди',
			link: './herbicides'
		},
		{
			url: './PlantsProtecting2.webp',
			alt: 'protecting image',
			text: 'Фунгіциди',
			link: './fungicides'
		},
		{
			url: './PlantsProtecting3.webp',
			alt: 'protecting image',
			text: 'Інсектициди',
			link: './Інсектициди'
		},
		{
			url: './PlantsProtecting4.webp',
			alt: 'protecting image',
			text: 'Десиканти',
			link: './Десиканти'
		},
		{
			url: './PlantsProtecting5.webp',
			alt: 'protecting image',
			text: 'Протруювачі',
			link: './Протруювачі'
		},
		{
			url: './PlantsProtecting6.webp',
			alt: 'protecting image',
			text: 'Родентициди',
			link: './Родентициди'
		},
		{
			url: './PlantsProtecting7.webp',
			alt: 'protecting image',
			text: 'Ретарданти',
			link: './Ретарданти'
		},
		{
			url: './PlantsProtecting8.webp',
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