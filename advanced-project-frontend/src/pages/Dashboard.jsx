import { useState } from 'react';
import React from 'react';
// components
import DashHeader from '../components/DashHeader';
import DashHome from '../components/DashHome';

import SideBar from '../components/SideBar';
// styles
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';

const Dashboard = () => {
	return (
		<div className="DashboardContainer">
			<SideBar />
			{/* <DashHome />  */}
		</div>
	);
};

export default Dashboard;
