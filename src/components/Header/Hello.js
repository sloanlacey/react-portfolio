import React from 'react';
import { Jumbotron, Card } from 'react-bootstrap';
import '../Header/Hello.css';
import resumePDF from '../Header/sloanlacey.pdf';


function Hello() {
    return (
        <>
        <Jumbotron fluid className='header'>
            <div className='row'>
                 <div id='profile-image' className='col-lg-6 col-md-12 col-sm-12'>
                     <p className='circle'></p>
                 </div>
                 <div className='col-lg-6 col-md-12 col-sm-12 bio-card'>
                    <Card className='bio-content' style={{ width: '18rem' }}>
                        <Card.Header>Full-Stack Developer || UI/UX Design Wizard</Card.Header>
                            <Card.Body>
                            <Card.Title>Find Me:</Card.Title>
                            <Card.Text>
                            <a href="https://github.com/sloanlacey" target="_blank" rel="noreferrer" alt="github-icon" title="Sloan's Github." className='icons'><i className="fab fa-github fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/sloanlacey/" target="_blank" rel="noreferrer" alt="linkedin-icon" title="Sloan's LinkedIn profile." className='icons'><i className="fab fa-linkedin fa-2x"></i></a>
                            <a href="https://twitter.com/iamMrTeal" target="_blank" rel="noreferrer" alt="linkedin-icon" title="Sloan's LinkedIn profile." className='icons'><i className="fab fa-twitter fa-2x"></i></a>
                            <a href={resumePDF} download target="_blank" rel="noreferrer" alt="pdf-icon" title="Download Sloan's resumé."><i className="fas fa-file-pdf fa-2x"></i></a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
               </div>
            </div>
        </Jumbotron>
        </>
    );
}

export default Hello;