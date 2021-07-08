import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import authreducer from './Redux/reducers/authreducer';
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';



/*const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authreducer
});
const store =  createStore(rootReducer, composeEnhancers());*/

const app = (
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
