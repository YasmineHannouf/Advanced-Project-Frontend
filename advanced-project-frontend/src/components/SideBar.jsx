import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const sideBarLinks = [
	{
		name: 'home',
		path: '/',
		icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
	},
	{
		name: 'Transfer',
		path: '/transfer',
		icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />,
	},
	{
		name: 'Receive',
		path: '/receive',
		icon: <FontAwesomeIcon className="icon" icon="fa-solid fa-house" />,
	},
	{
		name: 'Report',
		path: '/report',
		icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />,
	},
	{
		name: 'Categories',
		path: '/categories',
		icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />,
	},
];
const collapseState = [
	{
		true: <FontAwesomeIcon icon="fa-solid fa-arrow-left" />,
		false: <FontAwesomeIcon icon="fa-solid fa-arrow-right" />,
	},
];

const SideBar = ({ setHomeExpanded }) => {
	const [collapsed, setCollapsed] = useState({});
	const [status, setStatus] = useState(false);
	const [gridExpanded, setGridExpanded] = useState({
		gridColumnStart: '1',
		gridColumnEnd: '3',
	});

	const collapseStatus = [
		{
			display: 'inline',
		},
		{
			display: 'none',
		},
	];

	return (
		<div className="sideBar" style={gridExpanded}>
			<a
				href="#"
				onClick={() => {
					if (status) {
						setStatus(!status);
						setCollapsed(collapseStatus[0]);
						setGridExpanded({
							gridColumnStart: '1',
							gridColumnEnd: '3',
						});
						setHomeExpanded(false);
					} else {
						setStatus(!status);
						setCollapsed(collapseStatus[1]);
						setHomeExpanded(false);
						setGridExpanded({
							gridColumnStart: '1',
							gridColumnEnd: '2',
						});
					}
				}}
			>
				<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
			</a>

			{sideBarLinks.map((link) => {
				return (
					<div
						key={sideBarLinks.indexOf(link)}
						className="sideBarLinkContainer"
					>
						<a href="#">{link.icon} </a>
						<a
							href={link.path}
							className="linkNaming"
							style={collapsed}
						>
							{link.name}
						</a>
					</div>
				);
			})}
		</div>
	);
};
export default SideBar;
