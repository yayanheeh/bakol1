import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Yayan from './views/Yayan';
import Youtube from './views/Youtube';
import Telegram from './views/Telegram';
import Soundcloud from './views/Soundcloud';
import Downloader from './views/Downloader';
import Home from './views/Home';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/products"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={UserList}
          exact
          path="/users"
        />
        <Route
          component={ProductList}
          exact
          path="/products"
        />
        <Route
          component={Typography}
          exact
          path="/typography"
        />
        <Route
          component={Icons}
          exact
          path="/icons"
        />
        <Route
          component={Account}
          exact
          path="/account"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={Yayan}
          exact
          path="/yayan"
        />
        <Route
          component={Telegram}
          exact
          path="/telegram"
        />

        <Route
          component={Downloader}
          exact
          path="/downloader"
        />
        <Route
          component={Soundcloud}
          exact
          path="/soundcloud"
        />
       <Route
          component={Youtube}
          exact
          path="/youtube"
        />
        <Route
          component={Home}
          exact
          path="/home"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
