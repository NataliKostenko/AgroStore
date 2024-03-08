import './filter.css';
import Filter from './filter';
export default function PanelFilter() {

	return <div className="filter">
		<div className='filterTitle'>
			Фільтр
		</div>
		<div className='filterText'>
			<div>
				<h4 > Виробник</h4>
				<Filter url={'../../makersFilter.json'} />
			</div>
			<hr />
			<div>
				<h4 > Культура</h4>
				<Filter url={'../../culturesFilter.json'} />
			</div>
			<hr />
			<div>
				<h4 > Кількість</h4>
				<Filter url={'../../amountFilter.json'} />
			</div>
		</div>
	</div>
}