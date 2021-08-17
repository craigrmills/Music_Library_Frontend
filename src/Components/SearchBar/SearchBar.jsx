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
        }, () => this.props.filterSongs(this.state.searchTerm, this.state.field));
    }

    render() {
        return(
            <div className="container bg-secondary ">
                <form className="form-inline">
                    <select className="form-select form-select-sm width-50px" name="field" onChange={this.handleChange} >
                        <option value="title">Title</option>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="genre">Genre</option>
                        <option value="release_date">Release Date</option>
                    </select>
                    <input
                        className="form-control" 
                        type="text"
                        placeholder="Search..."
                        name="searchTerm"
                        onChange={this.handleChange} 
                    />  
                </form>
            </div>
        )
    }
}

export default SearchBar;
