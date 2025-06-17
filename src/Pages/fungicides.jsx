import '../index.css';
import './PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../Components/Filter/PanelFilters';
import CatalogPanel from '../Components/CatalogPanel/CatalogPanel';
import ProductPanel from '../Components/ProductPanel/ProductPanel';
import H1 from '../Components/H1/H1';

export default function Fungicides() {
	return <div className='catalogPage'>
		<H1 text={'Фунгіциди'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<CatalogPanel url={'../../Data/categories.json'} />
				<PanelFilter />
			</div>
			<ProductPanel url={"../../Data/products.json"} />
		</div>
	</div>
}