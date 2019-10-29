import React, { Suspense, lazy } from 'react';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ROUTES } from '@common/constants';
import { Loader } from '@components/UI/Loader';

const HomePage = lazy(() => import('@pages/HomePage'));
const ImagePage = lazy(() => import('@pages/ImagePage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));
const UploadImagePage = lazy(() => import('@pages/UploadImagePage'));

const RoutesList = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.IMAGE} component={ImagePage} />
      <Route exact path={ROUTES.UPLOAD_IMAGE} component={UploadImagePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export const Routes = withRouter(RoutesList);
