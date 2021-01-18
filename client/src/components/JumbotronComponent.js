import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

// This is the Jumbotron in the Home page
const SectionTwo = () => {
    return (
        <div>
            <Jumbotron>
                <h1> Welcome To The iHeartMedia Code Challenge </h1>
                <p> This Challenge Was Made Using React.js, Node.js, And Express</p>
                <p> You Will Be Able To Click On The Songs List Page To View Top Songs In Radio Now!</p>
            </Jumbotron>
        </div>
    );
}

//exporting to be used as a component
export default SectionTwo;