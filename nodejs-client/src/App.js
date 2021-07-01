import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

const App = () => {

    const route = (
        <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/" component={Home} exact/>
                <Redirect to="/" />
            </Switch>
    )

    return (
        <div className="app">
            {route}
        </div>
    )
}

export default App;