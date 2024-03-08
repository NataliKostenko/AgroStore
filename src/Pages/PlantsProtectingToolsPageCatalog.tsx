import './PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../filter/panelFilters';
import CatalogPanel from '../catalogPanel/catalogPanel';
import ProductPanel from '../productPanel/productPanel';
import H1 from '../H1/h1';

export default function PlantsProtectingToolsPageCatalog() {
	return <>
		<H1 text={'Засоби захисту рослин'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<CatalogPanel />
				<PanelFilter />
			</div>
			<ProductPanel url={"../../productPanel.json"} />
		</div>
	</>
}