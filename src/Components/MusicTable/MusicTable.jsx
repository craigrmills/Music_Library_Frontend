import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
    return (
        <div>
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
                        <td><button className="btn btn-danger" onClick={() => props.removeSong(songs.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MusicTable;