import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Carousel.css';
import image1 from '../../images/example-page.png';
import image2 from '../../images/teamdemo.gif';
import image3 from '../../images/passtest.png';

function CarouselProfGen() {
    return (
      <>
      <div className='container'>
      <h2 id='project-headers'>Team Profile Generator</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
          />
          <Carousel.Caption>
          <h3><span className='slide-span'>Slide #1</span></h3>
            <Button href='https://github.com/sloanlacey/profile-generator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
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
            <Button href='https://github.com/sloanlacey/profile-generator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
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
            <Button href='https://github.com/sloanlacey/profile-generator' target='_blank' rel="noreferrer" variant="dark">Repo</Button>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </>
    );
}

export default CarouselProfGen;