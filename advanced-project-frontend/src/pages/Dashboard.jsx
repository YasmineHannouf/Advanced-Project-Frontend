import { useState } from 'react';
import React from 'react';
import {  Outlet } from 'react-router-dom'; 
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';

const Dashboard = () => {
	return (
		<div className="DashboardContainer">
			<Outlet />
		</div>
	);
};

export default Dashboard;
