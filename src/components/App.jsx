import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobBoard from './JobBoard';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <hr />
          <Route exact path="/" component={JobBoard} />
          {/* <Route path="/inventory" component={InventoryBoard} /> */}
        </Router>
        <style jsx global>{`
          body {
            font-family: comfortaa, sans-serif;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        
        `}</style>
      </div>
    );
  }
}

export default App;
