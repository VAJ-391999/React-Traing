import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Button from './components/UI/Button/Button';
import NavigationItem from './components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import './components/Navigation/NavigationItems/NavigationItem/NavigationItem.css';

import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
