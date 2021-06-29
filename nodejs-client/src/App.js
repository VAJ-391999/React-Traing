import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home/Home';

const App = () => {

    const route = (
        <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Home}/>
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