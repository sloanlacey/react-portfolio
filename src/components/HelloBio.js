import React from 'react';
import { Jumbotron, Card } from 'react-bootstrap';
import '../styles/HelloBio.css';


function HelloBio() {
    return (
        <>
        <Jumbotron fluid className='header'>
            
        {/* <div className='header'> */}
            <div className='row'>
                 <div id='profile-image' className='col-lg-6 col-md-12 col-sm-12'>
                     <p className='circle'></p>
                 </div>
                 <div className='col-lg-6 col-md-12 col-sm-12 bio-card'>
                    <Card className='bio-content' style={{ width: '18rem' }}>
                        <Card.Header>UI/UX Design Wizard</Card.Header>
                            <Card.Body>
                            <Card.Title>Social Links</Card.Title>
                            <Card.Text>
                                Social links, button to open popout with bio.
                            </Card.Text>
                            </Card.Body>
                        </Card>
               </div>
            </div>
        {/* </div> */}
        </Jumbotron>
        </>
        // <div className='header'>
        //     <div className='row'>
        //         <div id='profile-image' className='col-lg-6 col-md-12 col-sm-12'>
        //             <p className='circle'></p>
        //         </div>
        //         <div className='col-lg-6 col-md-12 col-sm-12'>
        //             2 of 2
        //         </div>
        //     </div>
        // </div>
    );
}

export default HelloBio;