import React from 'react';

const SideLink = ({ key, icon, path, name, display }) => {
	return (
		<div key={key} className="sideBarLinkContainer">
			<a href="#">{icon} </a>
			<a href={path} style={{ display: display }}>
				{name}
			</a>
		</div>
	);
};

export default SideLink;
