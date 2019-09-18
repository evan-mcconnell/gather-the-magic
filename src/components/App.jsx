import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Header from './ui/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Router>
          <Route exact path="/" component={Landing} />
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
