import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brandImage from '../assets/logo.png';
import '../styles/dashHeader.css';
import { context } from '../App.js';

const DashHeader = () => {
	const [sideBarExpanded, setsideBarExpanded] = useContext(context);
	return (
		<header className="dashHeader">
			<div className="headerBrandContainer">
				<img src={brandImage} alt="brand" />
			</div>
			<button
				onClick={() => {
					console.log(sideBarExpanded);
					setsideBarExpanded(!sideBarExpanded);
				}}
			>
				{sideBarExpanded ? (
					<FontAwesomeIcon
						icon="fa-solid fa-xmark"
						style={{ color: '#ffffff' }}
					/>
				) : (
					<FontAwesomeIcon icon="fa-solid fa-bars" />
				)}
			</button>
		</header>
	);
};

export default DashHeader;
