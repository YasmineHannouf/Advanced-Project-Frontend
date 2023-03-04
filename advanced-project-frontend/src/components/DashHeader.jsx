import React from 'react';
import Search from './Search';

const DashHeader = () => {
	return (
		<header className='dashHeader'>
			<h1>Dashboard</h1>
			<div className="greetings">
				<h4>
					hello <span>Name</span>
				</h4>
				<div className="admin-img-container">
					<img src="" alt="userImage" />
				</div>
			</div>
			<div className="header-btn-container">
				<button>help</button>
				<button>Logout</button>
			</div>
		</header>
	);
};

export default DashHeader;
