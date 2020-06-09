import React, { Component } from "react";
// import ReactDom from 'react-dom';
import DefaultBody from './Body/defaultBody';
import { Route, Link, Switch, IndexRoute } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from './Body/services';

class Body extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>  
          <div className="container-fluid" id='container1'>
            <Route exact path="/react2" component={DefaultBody} />
            <Route exact path="/services" component={Services} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Body;
