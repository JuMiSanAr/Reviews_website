import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));

const  Routes = () => {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>

      </Switch>
    </Suspense>
  </Router>
  );
}

export default Routes;