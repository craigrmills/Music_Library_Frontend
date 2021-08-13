import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';

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

    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        let allSongs = response.data
        this.setState({
            songs: allSongs
        });
    }

    render() {
        return (
            <React.Fragment>
                <MusicTable songs={this.state.songs}/>
            </React.Fragment>
        )
    }
}

export default App;