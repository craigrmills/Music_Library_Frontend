import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SongForm from './Components/SongForm/SongForm';
import SearchBar from './Components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            filteredSongs: [],
        }
        this.getSongs = this.getSongs.bind(this)
    }

    componentDidMount() {
        this.getSongs();
    }

    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data,
            filteredSongs: response.data
        });
    }

    addSong = async(song) => {
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/', song)
            console.log(response)
            this.getSongs();
        }
        catch(e){
            console.log(e)
        } 
    }

    removeSong = async(id) => {
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            console.log(response)
            this.getSongs();
        }
        catch(e){
            console.log(e)
        }
    }

    filterSongs = (query, field) => {
        let filtered = this.state.songs.filter(function(el) {
            return el[field].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        this.setState({
            filteredSongs : filtered
        })
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar filterSongs = {this.filterSongs}/>
                <MusicTable songs={this.state.filteredSongs} removeSong={this.removeSong}/>
                <SongForm addSong={this.addSong}/>
            </React.Fragment>
        )
    }
}

export default App;