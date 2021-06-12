import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { useFortune } from '../../utils/hooks/useFortune';
import './Body.styles.css';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function Body() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Body;
