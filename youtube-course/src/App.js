import React from 'react';
import './App.css';
import Backdrop from './comonents/Backdrop';
import Todo from './comonents/Todo';
import Model from './comonents/Model';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
     <Todo title="Learn React"/>
     <Todo title="Master React Course" />
     <Todo title="Exploare React Course" />
     <Model />
     <Backdrop />
    </div>
  );
}

export default App;
