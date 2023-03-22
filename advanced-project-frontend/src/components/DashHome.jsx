import React from 'react';
import '../styles/dashHome.css';

import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import { useState, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import ProfitGoal from './ProfitGoal';
import targetImage from '../assets/pngegg.png';

import Loader from './Loader';

const DashHome = () => {
	const [data, setData] = useState(null);
	const [profitGoal, setProfitGoal] = useState(89);

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
		{ name: 'Page A', uv: 1000, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 4500, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 5222, pv: 8000, amt: 6000 },
	];

	// const incomesDate = data && data.map(eachIncome => {
	// 	return [{}]
	// }
	// 	)

	{
		if (!data || !profitGoal) {
			return <Loader />;
		}
		return (
			<div className="dashHome">
				{/* <BarElement /> */}
				{/* <BarController /> */}
				<h1 className="title">Balances</h1>
				<section className="overallContainer">
					<div>
						<p>Income</p>
						<FontAwesomeIcon icon="fa-solid fa-download" />
						<span>{Income}</span>
					</div>
					<div>
						<p>Expense</p>
						<FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />
						<span>{Expense}</span>
					</div>
					<div>
						<p>Total</p>
						<FontAwesomeIcon icon="fa-solid fa-wallet" />
						<span>{Total}</span>
					</div>
					<div>
						<p>Targets</p>
						<FontAwesomeIcon icon="fa-solid fa-bullseye" />
						<span>{profitGoal.length} Goals </span>
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
						className="barChartContainer"
					>
						<div style={{ minWidth: '40%' }}>
							{profitGoal.length > 0 ? (
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
									})
							) : (
								<div>hello</div>
							)}
						</div>
						<div className="targetImageContainer">
							<img src={targetImage} alt="" />
						</div>
					</div>
				</section>
				<hr />
				<section>
					<h2 className="title">incomes / expenses overview</h2>

					<div className="pieChartContainer">
						<LineChart width={400} height={300} data={chartData}>
							{/* --pink: #f5c7a2; --light-green: #48bf91; */}
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
								<div className="colorNameContainer ">
									<div className="colorCode incomes"></div>
									<p>Incomes</p>
								</div>
								<div className="colorNameContainer">
									<div
										className="colorCode expenses"
										style={{ backgroundColor: '#36a2eb' }}
									></div>
									<p>Expenses</p>
								</div>
							</div>
							<div>
								<PieChart
									data={[
										// --pink: #f5c7a2; --light-green: #48bf91;
										{
											title: 'Incomes',
											value: Income,
											color: '#ff6384',
										},
										{
											title: 'Expenses',
											value: Expense,
											color: '#36a2eb',
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

				{/* <TargetGoal /> */}
			</div>
		);
	}
};

export default DashHome;
