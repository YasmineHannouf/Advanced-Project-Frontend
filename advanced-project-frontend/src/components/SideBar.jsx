import adminImage  from "../assets/default_61f3429ad1ced-removebg-preview.png"
import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import SideLink from './SideLink';
library.add(fas);

// images 


const sideBarLinks = [
	{
		name: 'home',
		path: '/',
		icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
	},
	{
		name: 'Expenses',
		path: '/expenses',
		icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />,
	},
	{
		name: 'Incomes',
		path: '/incomes',
		icon: <FontAwesomeIcon icon="fa-solid fa-download" />,
	},
	{
		name: 'Additionals',
		path: '/categories',
		icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
	},
	{
		name: 'Quick Add',
		path: '/add',
		icon: <FontAwesomeIcon icon="fa-solid fa-plus" />,
	},
];

const SideBar = ({ setHomeExpanded }) => {
	const [sideBarExpanded, setsideBarExpanded] = useState(true);

	const handleToggleSideBar = () => {
		setsideBarExpanded(!sideBarExpanded);
	};

	return (
		<div
			className={`sideBar ${
				sideBarExpanded ? 'sideBar-expanded' : 'sideBar-collapsed'
			}`}
		>
			<a href="#" onClick={handleToggleSideBar}>
				{sideBarExpanded ? (
					<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
				) : (
					<FontAwesomeIcon icon="fa-solid fa-arrow-right" />
				)}
			</a>
			<div>
				{sideBarLinks.map((item) => {
					return (
						<SideLink
							display={sideBarExpanded ? 'inline-block' : 'none'}
							key={sideBarLinks.indexOf(item)}
							name={item.name}
							icon={item.icon}
							path={item.path}
						/>
					);
				})}
			</div>
			<div className="greetings">
			<FontAwesomeIcon icon="fa-solid fa-caret-up" />
			<div className="admin-img-container">
					<img src={adminImage} alt="userImage" />
				</div>
				<h4>
					hello <span>Admin</span>
				</h4>
				
			</div>
		</div>
	);
};

export default SideBar;
