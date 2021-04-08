import React from 'react';
import '../About/Bio.css';
import { Jumbotron, Button } from 'react-bootstrap';

function Bio() {
    return (
        <Jumbotron className='bio-jumbo'>
            <h1>Who am I?</h1>
                <p>
                    I'm Sloan, a <strong>full-stack engineer</strong> based in Portland, OR. I love to <strong>build</strong> things that live on the web. My goal is to create designs that are as <strong>responsive</strong> as they are beautiful. I look forward to helping you <strong>imagine</strong> your next project.
                </p>
                <p>
                <Button className='bio-button' href='https://blacklivesmatter.com/' target="_blank">✊🏿✊🏾✊🏽✊🏼✊🏻</Button>
                </p>
        </Jumbotron>
    );
}

export default Bio;