import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardPage from '../features/pages/CardPage';
import HomePage from '../features/pages/HomePage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/card" component={CardPage} />
    </Switch>
  );
};

export default Router;
