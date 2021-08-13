import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
    const rows = props.songs.map((song) => {
        return <tr key={song.id}>
            <td>{song.id}</td><td>{song.title}</td><td>{song.artist}</td><td>{song.album}</td><td>{song.genre}</td><td>{song.release_date}</td></tr> 
    })

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th><th>Title</th><th>Artist</th><th>Album</th><th>Genre</th><th>Release Date</th>
                </tr>
                {rows}
            </table>
        </div>
    )
}

export default MusicTable;