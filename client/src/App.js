import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Loadable from 'react-loadable'
//Data
import * as actions from './actions'
//Components
import Menu from './components/Menu'
import Footer from './components/Footer'

const Loading = () => <div>Загрузка...</div>

const FormHub = Loadable({
  loader: () => import('./components/form_groups/FormHub'),
  loading: Loading
})

const MainPage = Loadable({
  loader: () => import('./components/main_page/MainPage'),
  loading: Loading
})

const ItemCard = Loadable({
  loader: () => import('./components/main_page/ItemCard'),
  loading: Loading
})

class App extends Component {
  componentDidMount() {
    this.props.groupRequest()
    this.props.itemRequest()
  }
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/manage_elements" component={FormHub} />
            <Route path="/item_info/:id" component={ItemCard} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect(
  null,
  actions
)(App)
