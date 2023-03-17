import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideLink from './SideLink';

const dropdownMenu = [
	{
		name: 'category',
		path: '/additional/Category',
		icon: <FontAwesomeIcon icon="fa-solid fa-table-cells-large" />,
	},
	{
		name: 'Fixed key',
		path: '/additional/fixedkey',
		icon: <FontAwesomeIcon icon="fa-solid fa-key" />,
	},
];
const DropdownLink = ({ display }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<div
			className={
				expanded ? 'dropdownContainer_expanded' : 'dropdownContainer'
			}
		>
			<div
				style={{
					margin: '1rem 0',
					textAlign: 'center',
					fontSize: '1.5rem',
					margin: '0 auto',
				}}
			>
				{expanded ? (
					<FontAwesomeIcon
						onClick={() => {
							setExpanded(!expanded);
						}}
						icon="fa-solid fa-caret-up"
					/>
				) : (
					<FontAwesomeIcon
						onClick={() => {
							setExpanded(!expanded);
						}}
						icon="fa-solid fa-caret-down"
					/>
				)}
				<span
					style={{ display: expanded && display ? 'inline' : 'none' }}
				>
					Additionals
				</span>
			</div>

			{dropdownMenu.map((eachLink) => {
				return (
					<SideLink
						key={dropdownMenu.indexOf(eachLink)}
						name={eachLink.name}
						path={eachLink.path}
						icon={eachLink.icon}
					/>
				);
			})}
		</div>
	);
};

export default DropdownLink;
