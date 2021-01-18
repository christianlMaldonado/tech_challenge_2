import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideone from '../Assets/slide1.jpg';
import slidetwo from '../Assets/slide2.png';
import slidethree from '../Assets/slide3.jpg';
// This lets us use the carousel in the Home page
const Section = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideone}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To iHeartMedia</h3>
                        <p> Listen Now! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidetwo}
                        alt="Second Slide"
                    />

                    <Carousel.Caption>
                        <h3>Exclusive Mixes!</h3>
                        <p>Listen To Exlcuive Mixes Only On iHeartRadio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidethree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> Listen Anywhere!</h3>
                        <p> Listen Anywhere With iHeartRadio Apps</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Section;