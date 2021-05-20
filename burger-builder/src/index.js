import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Button from './components/UI/Button/Button';
import NavigationItem from './components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import './components/Navigation/NavigationItems/NavigationItem/NavigationItem.css';

import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import thunk from 'redux-thunk';

/*const routing = (
  <Router>
    <h1>Hello</h1>
    <nav>
    <ul className="NavigationItem">
      <li> 
      <NavLink to="/" exact>
      <NavigationItem>Burger Builder</NavigationItem>
      </NavLink>
      </li>
      <li>
      <NavLink to="/components/UI/Button/Button">
        <NavigationItem>Button</NavigationItem>
      </NavLink>
      </li>
    </ul>
    </nav>
    <Route path="/" exact component={App} />
    <Route path="/components/UI/Button/Button" component={Button} />
  </Router>
)*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
