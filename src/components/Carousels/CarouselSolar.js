import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Carousel.css';
import image1 from '../../images/homepage.png';
import image2 from '../../images/planetexample1.png';
import image3 from '../../images/planetexample2.png';

function CarouselSolar() {
    return (
      <>
      <div className='container'>
      <h1 id='projects'>Projects</h1>
      </div>
      <br></br>
      <div className='container'>
      <h2 id='project-headers'>Solar System Navigator</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
          />
          <Carousel.Caption>
            <h3><span className='slide-span'>Slide #1</span></h3>
            <Button href='https://github.com/sloanlacey/solar-system-navigator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
          />
          <Carousel.Caption>
            <h3><span className='slide-span'>Slide #2</span></h3>
            <Button href='https://github.com/sloanlacey/solar-system-navigator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
          />
          <Carousel.Caption>
            <h3><span className='slide-span'>Slide #3</span></h3>
            <Button href='https://github.com/sloanlacey/solar-system-navigator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </>
    );
}

export default CarouselSolar;