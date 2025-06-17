import '../catalogSeeds/catalogSeeds.css'
import '../PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../../Components/Filter/PanelFilters';
import ProductPanel from '../../Components/ProductPanel/ProductPanel';
import H1 from '../../Components/H1/H1';

export default function CatalogFeed() {

	return <div className='catalogPage'>
		<H1 text={'Кормова група'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<PanelFilter />
			</div>
			<ProductPanel url={"../../Data/products.json"} />
		</div>
	</div>
}