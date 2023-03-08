import { useState } from 'react';
import React from 'react';
import {  Outlet } from 'react-router-dom'; 
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';

const Dashboard = () => {
	return (
		<div className="DashboardContainer">
			
			<div style={{ display: 'flex', gridColumn: '1/-1' }}>
			<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
