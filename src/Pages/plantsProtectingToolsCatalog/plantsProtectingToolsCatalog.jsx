import { Outlet } from "react-router-dom";
import PlantsProtectingInfo from '../../Components/PlantsProtectingTools/PlantsProtectingInfo';
import '../plantsProtectingToolsCatalog/plantsProtectingToolsPageCatalog.css';

export default function PlantsProtectingToolsCatalog
	() {
	return <div className='plantsProtectingToolsWrap'>
		<Outlet />
		<PlantsProtectingInfo />
	</div>
}