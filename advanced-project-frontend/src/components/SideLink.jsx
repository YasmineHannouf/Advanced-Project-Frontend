import React from 'react';
import { NavLink } from 'react-router-dom';

const SideLink = ({ key, icon, path, name, display }) => {
	return (
		<div key={key} className="sideBarLinkContainer">
			<NavLink href={path}>{icon} </NavLink>
			<NavLink to={path} style={{ display: display }}>
				{name}
			</NavLink>
		</div>
	);
};

export default SideLink;
