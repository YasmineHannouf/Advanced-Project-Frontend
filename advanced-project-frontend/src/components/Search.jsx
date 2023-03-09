import React from 'react';
import '../styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ placeholder }) => {
	return (
		<form className="searchBar">
			<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
			<input type="search" name="search" id="search" />
		</form>
	);
};

export default Search;
