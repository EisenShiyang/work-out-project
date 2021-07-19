import { React, Component } from 'react';
import classes from '../style/visual.module.css';

class Visual extends Component {
    render(){
        return(
            <div>
                <div className={classes.view}>
                    Visual
                </div>
            </div>
        );
    }
}

export default Visual;