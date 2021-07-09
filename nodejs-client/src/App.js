import React, { useState, useContext } from 'react';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Switch, Route, Redirect } from 'react-router';
import { useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout/Layout';
import MyWorkSpace from './MyWorkSpace/MyWorkSpace';
import Inbox from './Inbox/Inbox';
import { useDispatch, useSelector } from 'react-redux';



const App = () => {

    const location = useLocation();
    console.log(location.pathname);

    const dispatch = useDispatch();
    const myState = useSelector(state => {
        return state.auth
    })
    console.log("App", myState.isAuthentication, myState.currentUserName)

    let routes = (<div>Loading...</div>)
    let redirectTemp = (<div></div>)

    if (myState.isAuthentication) {
        if (location.pathname === "/") {
            redirectTemp = (
                <Redirect to="/dashboard" />
            )
        }
        
        routes = (
            <Switch>
                <Layout>
                    <Route path="/dashboard" component={Dashboard} exact />
                    <Route path="/myworkspace" component={MyWorkSpace} exact />
                    <Route path="/inbox" component={Inbox} exact />
                    {redirectTemp}
                </Layout>
            </Switch>

        )
    }
    else {
        routes = (
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={SignUp} exact />
                <Route path="/" component={Home} exact />
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <div className="app">
            {routes}
        </div>
    )
}

export default App;