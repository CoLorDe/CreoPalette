import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Creo from './pages/Creo'


function Pages() {
  return(
      <Switch>
        <Route exact path="/creopalette/">
          <Home />
        </Route>
        <Route exact path="/creopalette/creo">
          <Creo />
        </Route>
      </Switch>
  )
}

export default Pages;
