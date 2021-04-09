import React from 'react';
import { Carousel } from 'react-bootstrap';
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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </>
    );
}

export default CarouselSolar;