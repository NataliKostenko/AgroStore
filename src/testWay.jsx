import { Outlet } from "react-router-dom";
import PlantsProtectingInfo from "./Pages/plantsProtectingTools/plantsProtectingInfo";
import './Pages/plantsProtectingTools/plantsProtectingTools.css';

export default function TestWay() {
	return <div className='plantsProtectingToolsWrap'>
		<Outlet />
		<PlantsProtectingInfo />
	</div>
}