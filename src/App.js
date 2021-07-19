import React, { Component } from 'react';
import './App.css';

/* Tools */
import { Route, Switch } from 'react-router-dom';

/* Nav bar related */
import NavBar from './nav/navBar';
import Home from './main/home';
import Record from './main/record';
import Visual from './main/visual';
import About from './main/about';
import Time from './main/time';
import Facilities from './main/facilities';
import Complete from './main/complete';

class App extends Component {
    render(){
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path='/record'>
                        <Record />
                    </Route>
                    <Route path='/visual'>
                        <Visual />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/facilities'>
                        <Facilities />
                    </Route>
                    <Route path='/time'>
                        <Time />
                    </Route>
                    <Route path='/complete'>
                        <Complete />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
          </div>
        );
    }
}

export default App;

/*render(){
      return (
        <div className="App">
            <NavBar />
            <MainPart />
        </div>
      );
    }*/

    /*
        <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '80%'
                }}
            >
            </StarfieldAnimation>   
    */