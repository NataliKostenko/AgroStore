import '../index.css'
import './PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../filter/panelFilters';
import CatalogPanel from '../catalogPanel/catalogPanel';
import ProductPanel from '../productPanel/productPanel';
import H1 from '../H1/h1';

export default function Fungicides() {
	return <div className='catalogPage'>
		<H1 text={'Фунгіциди'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<CatalogPanel url={'../../Data/categories.json'} />
				<PanelFilter />
			</div>
			<ProductPanel url={"../../Data/productPanel.json"} />
		</div>
	</div>
}