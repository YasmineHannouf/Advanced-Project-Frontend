import React from 'react';
import '../styles/dashHome.css';

import { CircularProgress } from '@mui/material';

const DashHome = ({ homeExpanded }) => {
	return (
		<div className="dashHome">
			<h2 className="title">Balances</h2>
			<div>
				<div className="typeContainer">
					Total Incomes
				</div>
				<div className="typeContainer">
					Total Expenses<span>31000.00$</span>
				</div>
				<div className="typeContainer">
					Net Profit
					
				</div>
				<button>Quick Add</button>
			</div>
			<hr />
		</div>
	);
};

export default DashHome;
