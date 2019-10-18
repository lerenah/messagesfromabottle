import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Index from './components/layout/Index';
import Hosts from './components/layout/Hosts';
import Message from './components/layout/Message';
import Contact from './components/layout/Contact';
import Navbar from './components/layout/Navbar';
import Slider from './components/Slider';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Slider></Slider>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/hosts' component={Hosts} />
              <Route path='/message' component={Message} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
