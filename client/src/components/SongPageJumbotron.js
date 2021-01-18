import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

// This is the Song Page Jumbotron
const SongPageJumbotron = () => {
    return (
        <div>
            <Jumbotron>
                <h1> Song Page </h1>
                <p> This Is The Songs Page Made With React, Node.js and Express </p>
                <p> Here You Can Hit The Show Songs Button And Display Top Songs From The Hottest Artists!</p>
            </Jumbotron>
        </div>
    );
}

// Exports as a component
export default SongPageJumbotron;