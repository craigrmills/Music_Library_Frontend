import React, { Component } from 'react';
import './App.css';
import bootstrap from 'bootstrap';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SongForm from './Components/SongForm/SongForm';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.getSongs();
    }

    componentDidUpdate() {
        this.getSongs();
    }

    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        });
    }

    async addSong(song) {
        let payload = song
        await axios.post('http://127.0.0.1:8000/music/', payload);   
    }

    async removeSong(id) {
        await axios.delete('http://127.0.0.1:8000/music/' + id + '/');
    }

    render() {
        return (
            <React.Fragment>
                <MusicTable songs={this.state.songs} removeSong={this.removeSong}/>
                <SongForm addSong={this.addSong}/>
            </React.Fragment>
        )
    }
}

export default App;