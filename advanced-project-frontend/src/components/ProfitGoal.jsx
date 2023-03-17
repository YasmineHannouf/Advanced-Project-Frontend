import React from 'react';

const ProfitGoal = ({ goal, Total, title }) => {
	var percentage = Math.round((Total * 100) / Number(goal));

	// percentage = 50;
	return (
		<div style={{ width: '100%' }}>
			<div className="goalData">
				<p className="mb_5">{goal}</p>

				<p className="mb_5">{title}</p>
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
