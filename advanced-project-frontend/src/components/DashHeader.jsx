import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashHeader = () => {
	return (
		<header className="dashHeader">
			<div className="header-btn-container">
				<button>
					<FontAwesomeIcon icon="fa-solid fa-bell" />
					Get help
				</button>
			</div>
		</header>
	);
};

export default DashHeader;
