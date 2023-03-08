import { useState } from 'react';
import React from 'react';
// components
import DashHeader from '../components/DashHeader';
import DashHome from '../components/DashHome';

import SideBar from '../components/SideBar';
// styles
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';
import { Route } from 'react-router-dom';

const Dashboard = () => {
	const [homeExpanded, setHomeExpanded] = useState(true);

	return (
		<div className="DashboardContainer">
			
			<DashHeader />
			<div style={{ display: 'flex', gridColumn: '1/-1' }}>
				<SideBar setHomeExpanded={setHomeExpanded} />
				{/* <Route path="/" element={<DashHome />} /> */}
			</div>
		</div>
	);
};

export default Dashboard;
