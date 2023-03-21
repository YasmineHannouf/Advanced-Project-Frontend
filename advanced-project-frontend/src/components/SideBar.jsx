import adminImage from '../assets/default_61f3429ad1ced-removebg-preview.png';
import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import SideLink from './SideLink';
import DropdownLink from './DropdownLink';

library.add(fas);

const sideBarLinks = [
	{
		name: 'home',
		path: '/home',
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
		name: 'additionals',
		path: '/additionals',
		icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
		subLinks: [
			{
			  name: 'Category',
			  path: 'additionals/category',
			},
			{
			  name: 'Fixed Key',
			  path: '/additionals/fixedkey',
			},
		  ],
	},

	{
		name: 'ManageAdmin',
		path: '/manageadmin',
		icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
	},

	{
		name: 'Goals Tracker',
		path: '/goals',
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
					if (eachLink.name == 'additionals') {
						return (
							<div key={sideBarLinks.indexOf(eachLink)}>
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
