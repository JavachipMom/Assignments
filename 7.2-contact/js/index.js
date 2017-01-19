import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Contacts from './contacts'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/:name/:email/:phone/:location" component={ Contacts } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
