import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//Components
import Menu from './components/Menu';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
