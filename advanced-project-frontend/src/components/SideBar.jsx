import { useState } from 'react';
import React from 'react';
import '../styles/sideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import SideLink from './SideLink';
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
		icon: <FontAwesomeIcon icon="fa-solid fa-download" />,
	},
	{
		name: 'Report',
		path: '/report',
		icon: <FontAwesomeIcon icon="fa-solid fa-clipboard" />,
	},
	{
		name: 'Categories',
		path: '/categories',
		icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
	},
];
const collapseState = [
	{
		true: <FontAwesomeIcon icon="fa-solid fa-arrow-left" />,
		false: <FontAwesomeIcon icon="fa-solid fa-arrow-right" />,
	},
];

const SideBar = ({ setHomeExpanded }) => {
	const [sideBarExpanded, setsideBarExpanded] = useState(false);

	return (
		<div className={sideBarExpanded ? 'sideBar' : ' sideBar_collapsed'}>
			<a
				href="#"
				onClick={() => {
					console.log(sideBarExpanded);
					setsideBarExpanded(!sideBarExpanded);
				}}
			>
				{sideBarExpanded ? (
					<FontAwesomeIcon icon="fa-solid fa-x" />
				) : (
					<FontAwesomeIcon icon="fa-solid fa-arrow-right" />
				)}
			</a>
			<div>
				{sideBarLinks.map((link) => {
					return (
						<SideLink
							display={sideBarExpanded ? 'inline-block' : 'none'}
							key={sideBarLinks.indexOf(link)}
							name={link.name}
							icon={link.icon}
							path={link.path}
							// collapsed={collapsed}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default SideBar;
