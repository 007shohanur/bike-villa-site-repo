import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade className="container">
            <Carousel.Item>
                <img
                
                className="d-block w-100"
                src="https://i.ibb.co/CbJPcZ1/CBR-150R.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="text-warning">Honda CBR 150RR</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
               
                className="d-block w-100"
                src="https://i.ibb.co/F02RKN3/Yamaha-R15-V4.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">Yahama-R15-v4 150RR</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
               
                className="d-block w-100"
                src="https://i.ibb.co/6NnX7kn/gxr.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">Suzkie Gixxer SF 150 RR</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;