import React from "react";
import { Card } from "react-bootstrap";
import '../Card/Card.css';

function Tech(props) {
  return (
    <Card className='tech-cards'>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <p>{props.tech1}</p>
        <p>{props.tech2}</p>
        <p>{props.tech3}</p>
        <p>{props.tech4}</p>
        <p>{props.tech5}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Tech;