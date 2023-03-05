import { useState } from 'react';
import React from 'react';
import DashHeader from '../components/DashHeader';
import DashHome from '../components/DashHome';
import Search from '../components/Search';
import SideBar from '../components/SideBar';
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';

const Dashboard = () => {
	const [homeExpanded, setHomeExpanded] = useState(true);

	return (
		<div className="DashboardContainer">
			<Search placeholder={'search'} />
			<DashHeader />
			<div style={{ display: 'flex'  , gridColumn : '1/-1'}}>
				<SideBar setHomeExpanded={setHomeExpanded} />
				<DashHome homeExpanded={homeExpanded} />
			</div>
		</div>
	);
};

export default Dashboard;
