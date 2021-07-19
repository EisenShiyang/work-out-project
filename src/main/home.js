import { React, Component } from 'react';
import classes from '../style/home.module.css';

class Home extends Component {
    render(){
        return(
            <div>
                <div className={classes.view}>
                    Home
                </div>
            </div>
        );
    }
}

export default Home;