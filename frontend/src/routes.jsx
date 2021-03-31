import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/searchPage';

const Home = lazy(() => import('./pages/homePage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const UserProfile = lazy(() => import('./pages/userProfilePage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage'));
const NewRestaurantPage = lazy(() => import('./pages/newRestaurantPage'))

const  Routes = () => {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={SearchPage}/>
      <Route exact path="/registration" component={RegistrationPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/newRestaurant" component={NewRestaurantPage}/>

      <Route exact path="/userProfile" component={UserProfile}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default Routes;