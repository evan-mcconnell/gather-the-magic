import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Landing from './screens/Landing';
import Search from './screens/search/Search';
import Header from './ui/Header';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          {/* <Route path="/profile" component={profile} /> */}
        </div>
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
      </Router>
    );
  }
}

export default App;
