import axios from 'axios';
import React from 'react';
import '../styles/targetGoal.css';
import { useState } from 'react';

const TargetGoal = () => {
	const [goalData, setGoalData] = useState({
		title: '',
		goals: '',
		start_date: '',
		end_date: '',
	});
	const handleInputChange = (event) => {
		const dataInput = event.target.value;
		const cloneGoalData = goalData;
		cloneGoalData[event.target.name] = dataInput;
		setGoalData(cloneGoalData);
		console.log('ddsd'+cloneGoalData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(goalData);
		axios
			.post('http://localhost:8000/api/profit_goals', goalData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="form-box">
			<form className="form" onSubmit={handleSubmit}>
				<span className="title">Define New Profit Goal!</span>
				<span className="subtitle">set your goal..go For it!</span>
				<div className="form-container">
					<input
						onChange={handleInputChange}
						type="text"
						className="input"
						placeholder="Title"
						name="title"
						required
					/>
					<input
						onChange={handleInputChange}
						type="text"
						className="input"
						placeholder="Goal"
						name="goals"
						required
					/>
					<input
						onChange={handleInputChange}
						type="date"
						className="input"
						name="start_date"
						placeholder="Start Date"
						required
					/>
					<input
						required
						onChange={handleInputChange}
						name="end_date"
						type="date"
						className="input"
						placeholder="End Date"
					/>
				</div>
				<button style={{ textAlign: 'center' }}>Define Goal !</button>
			</form>
			<div className="form-section">
				
			</div>
		</div>
	);
};

export default TargetGoal;
