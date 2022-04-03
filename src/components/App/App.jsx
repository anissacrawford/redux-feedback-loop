import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback';
import Thanks from '../Thanks/Thanks';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>PRIME FEEDBACK</h1>
      </header>
    </div>

    <div>
      <Route path="/comments">
        <Comments/>
      </Route>

      <Route exact path="/">
        <Feeling/>
      </Route>

      <Route path="/support">
        <Support/>
      </Route>

      <Route path="/understanding">
        <Understanding/>
      </Route>

      <Route path="/feedback">
        <Feedback/>
      </Route>

      <Route path="/thanks">
        <Thanks/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
