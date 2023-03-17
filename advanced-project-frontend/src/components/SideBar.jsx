import adminImage from '../assets/default_61f3429ad1ced-removebg-preview.png';
import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import SideLink from './SideLink';
import SelectLabels from './SelectLabels';
import DropdownLink from './DropdownLink';

library.add(fas);

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
		name: 'Settings',
		path: 'settings',
		icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
	},
	{
		name: 'Additionals',
		path: '/categories',
		icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
	},
	{
		name: 'Goals Tracker',
		path: 'goals',
		icon: <FontAwesomeIcon icon="fa-solid fa-bullseye" />,
	},
];

const SideBar = () => {
	const [sideBarExpanded, setsideBarExpanded] = useState(false);

	return (
		<aside className={sideBarExpanded ? 'sideBar' : 'sideBar_expanded'}>
			<div className="brandContainer">
				<h1 className="z-index">
					<FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
					<span>Brand</span>
				</h1>

				{sideBarExpanded ? (
					<FontAwesomeIcon
						className="z-index"
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-left"
					/>
				) : (
					<FontAwesomeIcon
						className="z-index"
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-right"
					/>
				)}
			</div>
			<div className="sideLinksContainer z-index">
				{sideBarLinks.map((eachLink) => {
					if (eachLink.name == 'Additionals') {
						return (
							<div>
								<DropdownLink
									display={sideBarExpanded ? true : false}
								/>
							</div>
						);
					}
					return (
						<SideLink
							key={sideBarLinks.indexOf(eachLink)}
							name={eachLink.name}
							path={eachLink.path}
							icon={eachLink.icon}
						/>
					);
				})}
			</div>
			<div className="userCredentials z-index">
				<div className="profileContainer">
					<img src={adminImage} alt="admin" />
				</div>
				<div>
					<h4>dev name </h4>
					<p>Administrator</p>
				</div>
				<FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
			</div>
		</aside>
	);
};

export default SideBar;
