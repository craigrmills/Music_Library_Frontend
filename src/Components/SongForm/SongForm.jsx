import React, { Component } from 'react';
import './SongForm.css';
// import { Button, Container, Row, InputGroup, FormControl } from 'react-bootstrap';

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
            // <Container>
            //     <Row>
            //         <h3>Add New Song</h3>
            //     </Row>                
            //     <form onSubmit={this.handleSubmit}>
            //         <Row>
            //             <InputGroup>
            //                 <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            //                 <FormControl
            //                     placeholder="Title"
            //                     aria-label="Title"
            //                     area-aria-describedby="basic-addon1"
            //                     name="title"
            //                     value={this.state.title}
            //                     onChange={this.handleChange}
            //                     />
            //             </InputGroup>
            //         </Row>
            //         <Row>
            //             <InputGroup>
            //                 <InputGroup.Text id="basic-addon2">Artist</InputGroup.Text>
            //                 <FormControl
            //                     placeholder="Artist"
            //                     aria-label="Artist"
            //                     area-aria-describedby="basic-addon2"
            //                     name="artist"
            //                     value={this.state.artist}
            //                     onChange={this.handleChange}
            //                     />
            //             </InputGroup>
            //         </Row>
            //         <Row>
            //             <InputGroup>
            //                 <InputGroup.Text id="basic-addon3">Album</InputGroup.Text>
            //                 <FormControl
            //                     placeholder="Album"
            //                     aria-label="Album"
            //                     area-aria-describedby="basic-addon3"
            //                     name="album"
            //                     value={this.state.album}
            //                     onChange={this.handleChange}
            //                     />
            //             </InputGroup>
            //         </Row>
            //         <Row>
            //             <InputGroup>
            //                 <InputGroup.Text id="basic-addon4">Genre</InputGroup.Text>
            //                 <FormControl
            //                     placeholder="Genre"
            //                     aria-label="Genre"
            //                     area-aria-describedby="basic-addon4"
            //                     name="genre"
            //                     value={this.state.genre}
            //                     onChange={this.handleChange}
            //                     />
            //             </InputGroup>
            //         </Row>
            //         <Row>
            //             <InputGroup>
            //                 <InputGroup.Text id="basic-addon5">Release Date</InputGroup.Text>
            //                 <FormControl
            //                     placeholder="Release Date"
            //                     aria-label="Release Date"
            //                     area-aria-describedby="basic-addon5"
            //                     name="release_date"
            //                     value={this.state.release_date}
            //                     onChange={this.handleChange}
            //                     />
            //             </InputGroup>
            //         </Row>
            //         <Button type="submit">Add Song</Button>
            // </Container>
            <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <div>
                        <label>Artist</label>
                        <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Album</label>
                        <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />                        </div>
                    <div>
                        <label>Genre</label>
                        <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Release Date</label>
                        <input type="text" name="release_date" value={this.state.release_date} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add Song</button>
                    </div>
                </form>
            
        )
    }
}

export default SongForm;