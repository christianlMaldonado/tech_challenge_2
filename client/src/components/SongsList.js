// This imports react and Hooks, like useState
import React, { useState } from 'react';
// This lets us import the Song Page Jumbotron
import SongPageJumbotron from '../components/SongPageJumbotron';
import Table from 'react-bootstrap/Table';
const songs = require('../data/songs.json');

// Creating the songlist for users
const SongsList = () => {

    // Lets us show and hide the menu for the songslist to display 
    const [showText, hideText] = useState(false);
    const [add, minus] = useState(true);

    //importing songs from json format
    const dataImport = songs[0];

    function renderHeaderCells() {
        let headerCells = [];

        Object.keys(dataImport).map((x, i) => {
            let items = Object.values(dataImport)[i];
            headerCells.push(
                <th colSpan={Object.keys(items).length} key={i.name}>
                    {x}
                </th>
            );
            return headerCells;
        });
        return headerCells;
    }

    function renderSubHeaders() {
        let subHeaders = [];
        let subs = Object.values(dataImport);

        subs.map((x, i) => {
            if (subs[i] !== undefined) {
                Object.keys(subs[i]).map(y => {
                    subHeaders.push(<td>{y}</td>);
                    return subHeaders;
                });
            }
            return subHeaders;
        });
        return subHeaders;
    }

    console.log(dataImport);
    console.log(songs);

    return (
        <React.Fragment>
            
            {/* // Importing the Song Page Jumbotron */}
            <SongPageJumbotron/>
            
            {/* // This lets us hava a button that displays and hides text to users */}
            <button className="plus" onClick={() => { hideText(!showText); minus(!add) }}>{add ? 'Show Songs' : 'Hide Songs'} </button> 
            
            {showText &&

                <div>
            
                    <p> Tops Songs On The Charts</p>
                    
                    <Table stripped bordered hover variant="dark">
                        <thead>
                            <tr> {renderHeaderCells()}</tr>
                        </thead>
                        <tbody>
                            <tr> {renderSubHeaders()} </tr>
                        </tbody>
                    </Table>

                </div>
            }
        
        </React.Fragment>
    );
};

export default SongsList;