import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import RouteBuilderContainer from './routes/route_builder_container';
import NewActivityFormContainer from './activity_form/new_activity_form_container';
import RouteIndexContainer from './routes/route_index_container';
import Dashboard from './dashboard/dashboard';

const App = () => (
    <div>
        <header className="global-header">
            <NavContainer />
        </header>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Switch> 
            <ProtectedRoute exact path="/routes/new" component={RouteBuilderContainer} /> 
            <ProtectedRoute exact path="/activities/new" component={NewActivityFormContainer} />
            <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <Redirect to="/" />
        </Switch>   
    </div>
);

export default App;
