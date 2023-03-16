import adminImage from '../assets/default_61f3429ad1ced-removebg-preview.png';
import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import SideLink from './SideLink';
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
		name: 'Additionals',
		path: '/additionals',
		icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
		subLinks: [
			{
			  name: 'Categories',
			  path: '/add/categories',
			},
			{
			  name: 'Fixed Key',
			  path: '/add/fixedkey',
			},
		  ],
	},
	{
		name: 'Quick Add',
		path: '/add',
		icon: <FontAwesomeIcon icon="fa-solid fa-plus" />,
	},
	{
		name: 'Setting',
		path: '/setting',
		icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
	},
];

const SideBar = () => {
	const [sideBarExpanded, setsideBarExpanded] = useState(false);

	return (
		<aside className={sideBarExpanded ? 'sideBar' : 'sideBar_expanded'}>
			<div className="brandContainer">
				<h1>
					<FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
					<span>Brand</span>
				</h1>

				{sideBarExpanded ? (
					<FontAwesomeIcon
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-left"
					/>
				) : (
					<FontAwesomeIcon
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-right"
					/>
				)}
			</div>
			<Search />
			<div className="sideLinksContainer">
				{sideBarLinks.map((eachLink) => {
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
			<div>
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
