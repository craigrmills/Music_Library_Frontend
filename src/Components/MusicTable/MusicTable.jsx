import React from 'react';
import './MusicTable.css';
import { Button } from 'react-bootstrap';

const MusicTable = (props) => {
    return (
        <div className="container">
            <table id="musicTable">
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th
                    ><th>Release Date</th
                    ><th></th>
                </tr>
                {props.songs.map(songs => (
                    <tr key={songs.id}>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.genre}</td>
                        <td>{songs.release_date}</td>
                        <td><Button className="btn-danger" onClick={() => props.removeSong(songs.id)}>Delete</Button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MusicTable;