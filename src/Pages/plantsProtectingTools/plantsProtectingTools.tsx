import './plantsProtectingTools.css';
import H1 from '../../H1/h1';
import PlantsProtectingToolsItem from './plantsProtectingToolsItem';
// import { Outlet } from "react-router-dom";


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
			text: 'Фунгіциди',
			link: './Фунгіциди'
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

	return <div className='plantsProtectingToolsWrap'>
		<H1 text={'Засоби захисту рослин'} />
		{/* <Outlet /> */}
		<div className='plantsProtectingTools'>
			{items.map((item, index) => <PlantsProtectingToolsItem url={item.url} alt={item.alt} text={item.text} link={item.link} key={index} />)}
		</div>
		<div className='plantsProtectingInfo'>
			<div className='plantsProtectingInfoText'>
				<H1 text={'Засоби захисту рослин'} />
				<p>
					Засоби захисту рослин поділяють на чотири основні види: механічні, хімічні, біологічні та агротехнічні.
					Проте найраціональніше - це їх одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
					Існують тисячі різних видів препаратів хімічного захисту. Але не варто їх плутати, а тим більше об′єднувати
					з хімічними добривами. Методи їх впливу на рослини абсолютно протилежні.</p>

				<p>	Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці препарати мають суоро визначений об′єкт впливу
					(збудник хвороби, комахи-шкідники, вид або родина бур′янів).</p>

				<p>Отрутохімікати не терплять халатності. Це той тип препарату, який недостатньо просто розвести у воді і обприскати
					ним рослини. Якщо отрутохімікати неправильно застосувати, то вони можуть завдати шкоди вам, корисним комахам, урожаю.
				</p></div>
		</div>
	</div>
}