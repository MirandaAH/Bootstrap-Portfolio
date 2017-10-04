import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Accounts from './components/Accounts/Accounts';
import Navbar from './components/Navbar/Navbar';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Navbar />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
              </div>
              <div className="col-md-4">
                <Accounts />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
