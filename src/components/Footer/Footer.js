import React from 'react';
import { Card } from 'react-bootstrap';
import '../Footer/Footer.css';

function Footer() {
    return (
        <>
        <br></br>
        <br></br>
        <div className='footer'>
            <Card id='foot-card' style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default Footer;