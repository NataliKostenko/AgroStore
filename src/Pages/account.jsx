import { Outlet } from "react-router-dom";
import './personalAccountPage/personalAccountPage.css';
import PersonalAccountPanel from '../Components/PersonalAccountPanel/PersonalAccountPanel';

export default function Account() {
	return <div className="personalAccountPage">
		<div className='personalAccountPageElements'>
			<PersonalAccountPanel />
			<Outlet />
		</div></div>
}