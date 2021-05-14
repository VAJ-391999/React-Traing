
import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    /*let routes = (
      
      <Switch>
        <Route path="/" exat Component={BurgerBuilder}></Route>
        <Redirect to="/" />
      </Switch>
     
    );*/
    return (
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
    );
  }
}

export default App;

