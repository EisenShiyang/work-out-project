import { React, Component } from 'react';
import classes from '../style/about.module.css';

class About extends Component {
    render(){
        return(
            <div>
                <div className={classes.view}>
                    About
                </div>
            </div>
        );
    }
}

export default About;