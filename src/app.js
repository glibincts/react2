import React, { Component } from "react";
// import ReactDom from "react-dom";
import Header from "./Components/header";
import Body from "./Components/body";
import Footer from "./Components/footer";  


class App extends Component {
  state = {};
  render() {
    return (
      <React-Fragment>
        <Header />
        <Body />
        <Footer />
      </React-Fragment>
    );
  }
}

export default App;
