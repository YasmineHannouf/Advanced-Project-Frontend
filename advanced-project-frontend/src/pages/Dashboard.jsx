import React from 'react';
import { Outlet } from 'react-router-dom';
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';

const Dashboard = () => {
	alert('Dashboard');
	return (
		<div className="DashboardContainer">
			{/* <Outlet />
			 */}
			 <h1>Hello</h1>

		</div>
	);
};

export default Dashboard;
