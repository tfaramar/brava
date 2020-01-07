import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import AuthRoute from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

//Routes will be defined in here
const App = () => (
    <div>
        <header>
            <h1>Strava</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;
