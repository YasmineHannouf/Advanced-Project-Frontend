import React from 'react';

const ProfitGoal = ({ goal, Total, title }) => {
	var percentage = Math.round((Total * 100) / Number(goal));

	// percentage = 50;
	return (
		<div style={{ width: '100%' }}>
			<div className="goalData">
				<p
					className="mb_5"
					style={{ display: 'flex', alignItems: 'flex-end' }}
				>
					{goal}
				</p>
				<div>
					<p
						className="mb_5"
						style={{
							textAlign: 'end',
							color: percentage <= '100' ? `gray` : `#198754`,
							fontWeight: percentage <= '100' ? `unset` : `900`,
						}}
					>
						{percentage >= 100
							? 'done ✔'
							: percentage >= 50
							? 'Almost There'
							: 'Keep Going!'}
					</p>
					<p className="mb_5">
						<span>{title}</span>
					</p>
				</div>
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
