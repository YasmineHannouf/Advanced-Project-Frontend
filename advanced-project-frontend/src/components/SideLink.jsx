import React from 'react';
import { NavLink } from 'react-router-dom';

const SideLink = ({ icon, path, name, display, align_items }) => {
	return (
		<div
			className="sideBarLinkContainer"
			style={{ alignItems: align_items }}
		>
			<NavLink to={path}>
				{icon} <span style={{ display: display }}>{name}</span>
			</NavLink>	
			<NavLink to={path}></NavLink>
		</div>
	);
};

export default SideLink;
