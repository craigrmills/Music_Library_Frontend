import React, { Component } from 'react';
import './SongForm.css';
import {Form, Row, Col, InputGroup, FormControl, Container, Button} from 'react-bootstrap';

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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            <Container className="bg-secondary pb-3">
                <Row className="text-center">
                    <Col></Col>
                    <Col>
                    <Form onSubmit={this.handleSubmit}>
                <h3>Add New Song</h3> 
                <InputGroup className="mb-3">
                    <InputGroup.Text>Title:</InputGroup.Text>
                    <FormControl name="title" value={this.state.title} onChange={this.handleChange} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Artist:</InputGroup.Text>
                    <FormControl name="artist" value={this.state.artist} onChange={this.handleChange} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Album:</InputGroup.Text>
                    <FormControl name="album" value={this.state.album} onChange={this.handleChange} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Genre:</InputGroup.Text>
                    <FormControl name="genre" value={this.state.genre} onChange={this.handleChange} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Release Date:</InputGroup.Text>
                    <FormControl name="release_date" value={this.state.release_date} onChange={this.handleChange} />
                </InputGroup>
                <Button type="submit">Add Song</Button>               
            </Form> 
                    </Col>
                    <Col></Col>
                </Row>
              
            </Container>
        )
    }
}

export default SongForm;