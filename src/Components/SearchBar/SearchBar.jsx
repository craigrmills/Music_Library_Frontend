import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            field: 'title'
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        },  this.props.filterSongs(this.state.searchTerm, this.state.field));
       
    }

    render() {
        return(
            <div>
                <center>
                    <span>Search Library:</span>
                    <select name="field" onChange={this.handleChange} >
                        <option value="title">Title</option>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="genre">Genre</option>
                        <option value="release_date">Release Date</option>
                    </select>
                    <input 
                        type="text"
                        placeholder="Search..."
                        name="searchTerm"
                        onChange={this.handleChange} 
                    />
                </center>
            </div>
        )
    }
}

export default SearchBar;
