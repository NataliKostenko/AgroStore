import { Outlet } from "react-router-dom";
import PlantsProtectingInfo from './plantsProtectingTools/plantsProtectingInfo';
import './plantsProtectingTools/plantsProtectingTools.css';

export default function PlantsProtectingToolsCatalog
	() {
	return <div className='plantsProtectingToolsWrap'>
		<Outlet />
		<PlantsProtectingInfo />
	</div>
}