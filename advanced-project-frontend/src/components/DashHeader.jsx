import React from 'react';
import Search from './Search';
import adminImage from '../assets/default_61f3429ad1ced-removebg-preview.png';
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
