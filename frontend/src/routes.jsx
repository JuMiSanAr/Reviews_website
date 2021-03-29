import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/homePage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const UserProfile = lazy(() => import('./pages/userProfilePage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage'));

const  Routes = () => {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/registration" component={RegistrationPage}/>
      <Route exact path="/login" component={LoginPage}/>

      <Route exact path="/userProfile" component={UserProfile}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default Routes;