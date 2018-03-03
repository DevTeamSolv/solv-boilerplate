/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUpContainer from 'containers/SignUpContainer/Loadable';
import Login from 'containers/Login/Loadable';
import Maintainence from '../../components/Maintainence/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Maintainence} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/signin" component={Login} />
        {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
