import logo from './logo.svg';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.js';

import HomeState from './HomeState.js';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/">
            <HomeState>
              <Home />
            </HomeState>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
