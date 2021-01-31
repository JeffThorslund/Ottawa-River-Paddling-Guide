import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import RiverRouter from './RiverRouter';
import UserRouter from '../user/UserRouter';
import PrivacyPolicy from '../user/PrivacyPolicy';
import TestEnvironment from '../test-environment/TestEnvironment';

/**
 * Creates all routes of base url.
 * Shows <Home /> by default.
 * Creates user login route, privacy policy route, and image upload interface route.
 * Creates route with variable url for differentiation at the river level.
 */

const GlobalRouter = ({ rivers }) => (
  <Switch>
    <Route exact path="/" key="home">
      <Home rivers={rivers} />
    </Route>

    {rivers && (
      <Route path="/user" key="user">
        <UserRouter rivers={rivers} />
      </Route>
    )}

    <Route path="/privacy-policy" key="privacy-policy">
      <PrivacyPolicy />
    </Route>

    <Route path="/maps">
      <RiverRouter rivers={rivers} />
    </Route>

    <Route path="/test-env">
      <TestEnvironment />
    </Route>
  </Switch>
);

export default GlobalRouter;