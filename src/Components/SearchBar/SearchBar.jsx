import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return(
        <div>
            <span className="visually-hidden">Search Library</span>
            <select name="searchOption" id="searchOption">
                <option value="0">Title</option>
                <option value="1">Artist</option>
                <option value="2">Album</option>
                <option value="3">Genre</option>
                <option value="4">Release Date</option>
            </select>
            <input 
                type="text"
                id="myInput"
                placeholder="Search..."
                name="s" 
                onKeyUp={props.searchMusic}
            />
        </div>
        
    )
}

export default SearchBar;
