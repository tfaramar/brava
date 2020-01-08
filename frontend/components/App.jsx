import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

//Routes will be defined in here
const App = () => (
    <div>
        <header className="global-header">
            
            <NavContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={Splash} />
            <Redirect to="/" />
        </Switch>  
    </div>
);

export default App;
