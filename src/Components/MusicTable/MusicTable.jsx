import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
    return (
        <div className="container">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Genre</th>   
                        <th scope="col">Release Date</th>   
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map(songs => (
                        <tr key={songs.id}>
                            <th scope="row">{songs.title}</th>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.genre}</td>
                            <td>{songs.release_date}</td>
                            <td><button className="btn btn-danger" onClick={() => props.removeSong(songs.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    )
}

export default MusicTable;