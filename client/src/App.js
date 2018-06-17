import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loadable from 'react-loadable';
//Components
import Menu from './components/Menu';
import Footer from './components/Footer';

const Loading = () => <div>Загрузка...</div>

const FormHub = Loadable({
    loader: () => import('./components/form_groups/FormHub'),
    loading: Loading
});

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
            <Route path="/manage_elements" component={FormHub}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
