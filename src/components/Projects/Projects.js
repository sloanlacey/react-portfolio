import React from 'react';
import CarouselSolar from '../Carousels/CarouselSolar';
import CarouselPortfolio from '../Carousels/CarouselPortfolio';
import CarouselBurger from '../Carousels/CarouselBurger';
import CarouselBook from '../Carousels/CarouselBook';
import CarouselEmpDir from '../Carousels/CarouselEmpDir';
import CarouselProfGen from '../Carousels/CarouselProfGen';
import '../Projects/Projects.css';

function Projects() {
    return (
        <>
        <CarouselSolar />
        <br></br>
        <CarouselPortfolio />
        <br></br>
        <CarouselBook />
        <br></br>
        <CarouselBurger />
        <br></br>
        <CarouselEmpDir />
        <br></br>
        <CarouselProfGen />
        </>
    );
}

export default Projects;