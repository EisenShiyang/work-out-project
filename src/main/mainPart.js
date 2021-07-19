import { React, Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Home from './home';
import Record from './record';
import Visual from './visual';
import About from './about';

class MainPart extends Component { 
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
               {home()}
            </div>
        );
    }

    /*
     <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    */
};

const home = () => {
    return(
        <div>
            <Home />
        </div>
    );
}

const record = () => {
    return(
        <div>
            <Record />
        </div>
    );
}

const visual = () => {
    return(
        <div>
            <Visual />
        </div>
    );
}

const about = () => {
    return(
        <div>
            <About />
        </div>
    );
}

export default MainPart;