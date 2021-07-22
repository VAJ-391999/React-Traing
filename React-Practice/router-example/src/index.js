import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  About from './About';
import Contact from './Contact';
import From from './Form';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const routing = (
  
  <Router>

    <h1>Hello This is Router Example</h1>
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" activeStyle={{color: 'white'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" activeStyle={{color: 'white'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeStyle={{color: 'white'}}>Contact</NavLink>
        </li>
        <li>
        <NavLink to="/From" activeStyle={{color: 'white'}}>From</NavLink>
        </li>
      </ul>
    </nav>



    <Route path="/" exact component={App} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Form" component={From} />
  </Router>

);

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
