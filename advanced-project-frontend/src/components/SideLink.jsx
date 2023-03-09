import React from 'react';
import { NavLink } from 'react-router-dom';

const SideLink = ({ key, icon, path, name, display, align_items }) => {
	return (
		<div
			key={key}
			className="sideBarLinkContainer"
			style={{ alignItems: align_items }}
		>
			<NavLink href={path}>
				{icon} <span style={{ display: display }}>{name}</span>
			</NavLink>
			<NavLink to={path}></NavLink>
		</div>
	);
};

export default SideLink;
