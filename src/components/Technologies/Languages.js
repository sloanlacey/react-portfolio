import React from 'react';
import Card from '../Card/Card';
import '../Technologies/Languages.css';

function Languages() {
    return (
        <>
    <div className='container mx-auto'>
        <h1 id='tech-heading'>Technologies</h1>
            <div className='row card-div'>
                <div className='col-sm-12 col-md-12 col-lg-3'>
                    <Card 
                        title='Front-End'
                        tech1='React'
                        tech2='JavaScript'
                        tech3='HTML 5'
                        tech4='CSS => SASS'
                        tech5='Bootstrap => Materialize'
                    />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3'>
                    <Card 
                        title='Back-end'
                        tech1='Node JS'
                        tech2='Express'
                        tech3='MongoDB'
                        tech4='MySQL'
                        tech5='Handlebars'
                    />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3'>
                    <Card 
                        title='Deploy'
                        tech1='Heroku'
                        tech2='AWS'
                        tech3='Netlify'
                        tech4='GitHub Pages'
                        tech5='Firebase'
                    />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3'>
                    <Card 
                        title='Bonus'
                        tech1='Procreate'
                        tech2='Photoshop'
                        tech3='Git Flow'
                        tech4='Kanban'
                        tech5='Miro => Figma'
                    />
                </div>
            </div>
    </div>
    </>
    );
}

export default Languages;