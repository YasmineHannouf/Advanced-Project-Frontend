import React from 'react';
import '../styles/dashHome.css';

import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import { useState, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { ButtonGroup, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Bar } from 'react-chartjs-2';
import ProfitGoal from './ProfitGoal';
import targetImage from '../assets/pngegg.png';
import TargetGoal from './TargetGoal';

const userdata = [
	{
		id: 1,
		year: 2020,
		usergain: 200,
		userlose: 39,
	},
	{
		id: 2,
		year: 2020,
		usergain: 212,
		userlose: 80,
	},
	{
		id: 3,
		year: 2020,
		usergain: 88,
		userlose: 7,
	},
	{
		id: 4,
		year: 2020,
		usergain: 22,
		userlose: 300,
	},
	{
		id: 5,
		year: 2020,
		usergain: 90,
		userlose: 90,
	},
];

const DashHome = () => {
	const [data, setData] = useState(null);
	const [profitGoal, setProfitGoal] = useState(89);

	const [userData, setUserData] = useState({
		labels: userdata.map((data) => data.year),

		datasets: [
			{
				label: 'fixed',
				data: userdata.map((data) => data.usergain),
				backgroundColor: '#1d0023',
			},
			{
				label: 'recurring',
				data: userdata.map((data) => data.userlose),
				backgroundColor: '#F023',
			},
		],
	});

	// data
	useEffect(() => {
		axios
			.get('http://localhost:8000/api/')
			.then((data) => {
				console.log(data.data);
				setData(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/profit_goals')
			.then((data) => {
				console.log(data.data.message);
				setProfitGoal(data.data.message);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const Income = data && data.data.Total.Income;
	const Expense = data && data.data.Total.Expense;
	const Total = data && data.data.Total.Profit;

	const chartData = [
		{ name: 'Page A', uv: 8000, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 4500, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 5222, pv: 8000, amt: 5000 },
	];

	{
		if (!data || !profitGoal) {
			return <h2>No Data</h2>;
		}
		return (
			<div className="dashHome">
				<h1 className="title">Balances</h1>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
				>
					<Button>
						<p>Income</p>
						<FontAwesomeIcon icon="fa-solid fa-download" />
						<p>{Income}</p>
					</Button>
					<Button>
						<p>Expense</p>
						<FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />
						<p>{Expense}</p>
					</Button>
					<Button>
						<p>Total</p>
						<FontAwesomeIcon icon="fa-solid fa-wallet" />
						<p>{Total}</p>
					</Button>
				</ButtonGroup>

				<section
					className="barChartContainer"
					style={{
						width: '50%',
						margin: '0 auto',
					}}
				>
					<Bar data={userData} height={400} width={900} />
				</section>
				<hr />
				<section>
					{/* const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...]; */}

					<h2 className="title">incomes / expenses overview</h2>

					<div className="pieChartContainer">
						<LineChart width={600} height={300} data={chartData}>
							<Line
								type="monotone"
								dataKey="uv"
								stroke="#8884d8"
							/>
							<CartesianGrid stroke="#ccc" />
							<XAxis dataKey="name" />
							<YAxis />
						</LineChart>

						<div
							className="pieChart"
							style={{ marginLeft: 'auto' }}
						>
							<div className="keysContainer">
								<div className="colorNameContainer">
									<div className="colorCode incomes"></div>
									<p>Incomes</p>
								</div>
								<div className="colorNameContainer">
									<div className="colorCode expenses"></div>
									<p>Expenses</p>
								</div>
							</div>

							<div>
								<PieChart
									data={[
										{
											title: 'Incomes',
											value: Income,
											color: '#E38627',
										},
										{
											title: 'Expenses',
											value: Expense,
											color: '#C13C37',
										},
									]}
									rounded={false}
									lineWidth={100}
									label={({ dataEntry }) =>
										`${Math.round(dataEntry.percentage)}%`
									}
									labelStyle={{
										fontSize: '5px',
										fontFamily: 'sans-serif',
										fill: '#fff',
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<h2 className="title">
						progress Tracker
						<br />
						<span style={{ fontSize: `16px`, color: 'gray' }}>
							{profitGoal > '90'
								? 'almost there !'
								: 'keep going'}
						</span>
					</h2>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
						}}
					>
						<div style={{ minWidth: '40%' }}>
							{profitGoal &&
								profitGoal
									.sort((a, b) => {
										return a.goal - b.goal;
									})
									.map((goal) => {
										return (
											<ProfitGoal
												title={goal.title}
												key={goal.id}
												goal={goal.goal}
												Total={Total}
											/>
										);
									})}
						</div>
						<div className="targetImageContainer">
							<img src={targetImage} alt="" />
						</div>
					</div>
				</section>
				<TargetGoal />
			</div>
		);
	}
};

export default DashHome;
