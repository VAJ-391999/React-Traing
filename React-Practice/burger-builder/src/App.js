
import React, { Suspense, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import Orders from './containers/Orders/Orders';
//import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as action from './store/actions/index';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const App = (props) => {

  const { onTryAuthSignup } = props;

  useEffect(() => {
    onTryAuthSignup();
  }, [onTryAuthSignup]);
  
 

    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder}/> 
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Redirect to="/" />
      </Switch>
    );

    if (props.isAuthenticated) {
      routes =(
        <Switch>
          <Route path="/orders" render={(props) => <Orders {...props}  />} />
          <Route path="/checkout" render={(props) => <Checkout {...props} />}/>
          <Route path="/auth" render={(props) => <Auth {...props} />} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to="/" /> 
      </Switch>
      );
    }
    
    return (
        <div>
          <Layout>
            <Suspense fallback={<p>Loading...</p>}>
            {routes}
            </Suspense>
          </Layout>
        </div>
    );
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthSignup: () => dispatch(action.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

