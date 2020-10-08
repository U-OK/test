import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import AuthPage from '../pages/AuthPage'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter;