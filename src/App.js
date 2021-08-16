import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SongForm from './Components/SongForm/SongForm';
import SearchBar from './Components/SearchBar/SearchBar';

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

    searchMusic() {
        let input, filter, table, tr, td, i, txtValue, option;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("musicTable");
        tr = table.getElementsByTagName("tr");
        option = document.getElementById("searchOption").value;
      

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[option];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

    render() {
        return (
            <React.Fragment>
                <SearchBar searchMusic={this.searchMusic}/>
                <MusicTable songs={this.state.songs} removeSong={this.removeSong}/>
                <SongForm addSong={this.addSong}/>
            </React.Fragment>
        )
    }
}

export default App;