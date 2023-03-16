import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
	return (
		<div className="loader">
			<div class="lds-circle">
				<div>$$</div>
			</div>
		</div>
	);
};

export default Loader;
