import axios from 'axios';
import React from 'react';
import '../styles/targetGoal.css';
import { useState } from 'react';

const TargetGoal = () => {
	const [goalData, setGoalData] = useState({
		title: '',
		goal: '',
		startDate: '',
		endDate: '',
	});
	const handleInputChange = (event) => {
		const dataInput = event.target.value;
		const cloneGoalData = goalData;
		cloneGoalData[event.target.name] = dataInput;
		setGoalData(cloneGoalData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(goalData);
		axios
			.post('http://localhost:8000/profit_goals', goalData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.message);
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
						name="goal"
						required
					/>
					<input
						onChange={handleInputChange}
						type="text"
						className="input"
						name="startDate"
						placeholder="Start Date"
						required
					/>
					<input
						required
						onChange={handleInputChange}
						name="endDate"
						type="text"
						className="input"
						placeholder="End Date"
					/>
				</div>
				<button style={{ textAlign: 'center' }}>Define Goal !</button>
			</form>
			<div className="form-section">
				<p>
					Have an account? <a href="fb.com">Log in</a>{' '}
				</p>
			</div>
		</div>
	);
};

export default TargetGoal;
