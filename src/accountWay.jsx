import { Outlet } from "react-router-dom";
import './Pages/personalAccountPage/personalAccountPage.css';
import PersonalAccountPanel from './personalAccountPanel/personalAccountPanel';
export default function AccountWay() {
	return <div className="personalAccountPage">
		<div className='personalAccountPageElements'>
			<PersonalAccountPanel />
			<Outlet />
		</div></div>
}