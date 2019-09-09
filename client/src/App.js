import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Slider from './components/Slider';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar></Navbar>
          <Slider></Slider>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
