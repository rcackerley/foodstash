import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let RouterComp = () =>
  <Router>
      <Route exact path="/" component={App} />
  </Router>

export default RouterComp;
