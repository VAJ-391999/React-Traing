import React, { useContext } from 'react';
import './App.css';
import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import { AuthContext } from './context/auth-context';

const App = props => {

  let content = <Auth />

  const authContext = useContext(AuthContext);

  if(authContext.isAuth) {
    content = <Ingredients />
  }else {
    content = <Auth />
  }

  return content;

 
};

export default App;
