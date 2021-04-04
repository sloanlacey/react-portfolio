import React from 'react';
import '../styles/HelloBio.css';


function HelloBio() {
    return (
        <div className='header'>
            <div className='row'>
                <div id='profile-image' className='col-lg-6 col-md-12 col-sm-12'>
                    <p className='circle'></p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    2 of 2
                </div>
            </div>
        </div>
    );
}

export default HelloBio;