import './filter.css';
import Filter from './Filter';
export default function PanelFilter() {

	return <div className="filter">
		<div className='filterTitle'>
			Фільтр
		</div>
		<div className='filterText'>
			<div>
				<h4 > Виробник</h4>
				<Filter url={'../../Data/makersFilter.json'} />
			</div>
			<hr />
			<div>
				<h4 > Культура</h4>
				<Filter url={'../../Data/culturesFilter.json'} />
			</div>
			<hr />
			<div>
				<h4 > Кількість</h4>
				<Filter url={'../../Data/amountFilter.json'} />
			</div>
		</div>
	</div>
}