import React, { Component } from 'react'

class SongForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        });
    }

    render() {
        return (
            <div>
                <h3>Add New Song</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Artist</label>
                            <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Album</label>
                            <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Genre</label>
                            <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Release Date</label>
                            <input type="text" name="release_date" value={this.state.release_date} onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="submit" value="Add Song" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm;