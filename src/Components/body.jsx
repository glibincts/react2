import React, { Component } from "react";
// import ReactDom from 'react-dom';
import DefaultBody from './Body/defaultBody';
import { Route, Link, IndexRoute } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from './Body/services';

class Body extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="container-fluid" id='container1'>
          <Route exact path="/" component={DefaultBody} />
          <Route path="/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default Body;
