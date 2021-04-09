import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Carousel.css';
import image1 from '../../images/sloanhome.png';
import image2 from '../../images/sloanportfolio.png';
import image3 from '../../images/sloancontact.png';

function CarouselPortfolio() {
    return (
      <div className='container'>
      <h2 id='project-headers'>Previous Portfolio</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
          />
          <Carousel.Caption>
          <h3><span className='slide-span'>Slide #1</span></h3>
            <Button href='https://github.com/sloanlacey/portfolio-update' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
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
            <Button href='https://github.com/sloanlacey/portfolio-update' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
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
            <Button href='https://github.com/sloanlacey/portfolio-update' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselPortfolio;