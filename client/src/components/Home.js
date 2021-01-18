import React from 'react';
import CarouselComponent from './CarouselComponent';
import JumbotronComponent from './JumbotronComponent';


// this lets us render the jumbotron and carousel in the home page
const Home = () => {

    return (
        <div>
            <JumbotronComponent/>  
            <CarouselComponent/>
            
        </div>
    );
}

// Exports the home page into index
export default Home;