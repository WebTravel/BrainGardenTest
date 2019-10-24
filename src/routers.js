import React, { Suspense, lazy } from 'react';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ROUTES } from '@common/constants';
import { Loader } from '@components/UI/Loader';

const HomePage = lazy(() => import('@pages/HomePage'));

const RoutesList = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
    </Switch>
  </Suspense>
);

export const Routes = withRouter(RoutesList);
