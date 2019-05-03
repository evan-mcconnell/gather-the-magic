import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobBoard from './JobBoard';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <hr />
        <Route exact path="/" component={JobBoard} />
        {/* <Route path="/inventory" component={InventoryBoard} /> */}
      </Router>
    );
  }
}

export default App;
