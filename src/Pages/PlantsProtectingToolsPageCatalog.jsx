import './PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../filter/panelFilters';
import CatalogPanel from '../catalogPanel/catalogPanel';
import ProductPanel from '../productPanel/productPanel';
import H1 from '../H1/h1';

export default function PlantsProtectingToolsPageCatalog() {
	return <>
		<H1 text={'Каталог продукції'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<CatalogPanel url={'../../Data/categories.json'} />
				<PanelFilter />
			</div>
			<ProductPanel url={"../../Data/productPanel.json"} />
		</div>
	</>
}