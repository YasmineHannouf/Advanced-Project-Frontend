import React from 'react';
import '../styles/search.css';

const Search = ({ placeholder }) => {
	return (
		<form className="searchBar">
			<input
				type="search"
				name="search"
				id="search"
				placeholder={placeholder}
			/>
		</form>
	);
};

export default Search;
