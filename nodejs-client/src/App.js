import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout/Layout';
import MyWorkSpace from './MyWorkSpace/MyWorkSpace';
import Inbox from './Inbox/Inbox';

const App = () => {

    const withLayout = (
        <Layout>
             <Route path="/dashboard" component={Dashboard} exact />
             <Route path="/myworkspace" component={MyWorkSpace} exact/>
             <Route path="/inbox" component={Inbox} exact/>
        </Layout>
    )

    const route = (
        <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/" component={Home} exact/>
                {withLayout}
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