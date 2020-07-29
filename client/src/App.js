import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Index from './components/layout/Index';
import Hosts from './components/layout/Hosts';
import Message from './components/layout/Message';
import Contact from './components/layout/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Podcasts from './components/layout/Podcasts';
import TrackDetail from './components/tracks/TrackDetail';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/allPodcasts' component={Podcasts} />
            <Route path='/hosts' component={Hosts} />
            <Route path='/message' component={Message} />
            <Route path='/contact' component={Contact} />
            <Route path='/allPodcasts/:podcastId' component={TrackDetail} />
          </Switch>
          <Footer></Footer>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
