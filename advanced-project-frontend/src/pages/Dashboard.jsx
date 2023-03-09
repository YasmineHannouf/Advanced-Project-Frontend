import { useState } from 'react';
import React from 'react';
import {  Outlet } from 'react-router-dom'; 
import './../styles/Dashboard.css';
import '../styles/dashHeader.css';
import SideBar from '../components/SideBar';
const Dashboard = () => {
	return (
		<div className="DashboardContainer">
			<Outlet />
			<div style={{ display: 'flex', gridColumn: '1/-1' }}>
			</div>
		</div>
	);
};

export default Dashboard;
