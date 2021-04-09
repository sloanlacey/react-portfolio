import React from 'react';
import { Card } from 'react-bootstrap';
import '../Footer/Footer.css';
import resumePDF from '../Header/sloanlacey.pdf';

function Footer() {
    return (
        <>
        <br></br>
        <br></br>
        <div className='footer'>
            <Card id='foot-card' style={{ width: '18rem' }}>
                <Card.Header>Let's Connect 🪄 🖤 🔮</Card.Header>
                <Card.Body>
                <Card.Title>sloanlacey89@gmail.com</Card.Title>
                <Card.Text>
                    <a href="https://github.com/sloanlacey" target="_blank" rel="noreferrer" alt="github-icon" title="Sloan's Github." className='icons'><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/sloanlacey/" target="_blank" rel="noreferrer" alt="linkedin-icon" title="Sloan's LinkedIn profile." className='icons'><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://twitter.com/iamMrTeal" target="_blank" rel="noreferrer" alt="linkedin-icon" title="Sloan's LinkedIn profile." className='icons'><i className="fab fa-twitter fa-2x"></i></a>
                    <a href={resumePDF} download target="_blank" rel="noreferrer" alt="pdf-icon" title="Download Sloan's resumé."><i className="fas fa-file-pdf fa-2x"></i></a>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default Footer;