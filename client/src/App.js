import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loadable from 'react-loadable';
//Components
import Menu from './components/Menu';
import Footer from './components/Footer';

const Loading = () => <div>Загрузка...</div>

const MainPage = Loadable({
    loader: () => import('./components/main_page/MainPage'),
    loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
