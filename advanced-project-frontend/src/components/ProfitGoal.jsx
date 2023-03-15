import React from 'react';

const ProfitGoal = ({ goal, Total, title }) => {
	var percentage = Math.round((Total * 100) / Number(goal));

	console.log(percentage, goal, Total);

	// percentage = 50;
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<div className="goalData">
				<p>{goal}</p>

				<p>{title}</p>
			</div>

			<div className="goal-progress">
				<div
					style={{
						width: percentage <= '100' ? `${percentage}%` : `100%`,
					}}
				>
					<p>
						{percentage > 100
							? '100'
							: percentage < 0
							? 0
							: percentage}
						%
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfitGoal;
