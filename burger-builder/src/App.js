
import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import Orders from './containers/Orders/Orders';
//import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as action from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {

  componentDidMount () {
    this.props.onTryAuthSignup();
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact render={() => (<BurgerBuilder type="text" />)}/> 
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes =(
        <Switch>
          <Route path="/orders" component={asyncOrders} />
          <Route path="/checkout" component={asyncCheckout}/>
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact render={() => (<BurgerBuilder type="text" />)}/>
          <Redirect to="/" /> 
      </Switch>
      );
    }
    
    return (
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>
    );
  }
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

