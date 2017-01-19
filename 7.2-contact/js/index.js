
import React from 'react'
import { render } from 'react-dom'
import  { Router, Route, hashHistory } from 'react-router'
import Home from './home'
import Contacts from './contacts'

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={ Home }></Route>
      <Route path="/:name/:email/:phone/:location" component={ Contacts }></Route>
    </Router>
   ),
  document.getElementById('app')
)
