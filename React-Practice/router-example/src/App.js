import React, { createContext, useReducer, UseReucer } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import About from './About';
//import HookCounter from './components/SimpleHook/HookCounter';
//import HookCounterTow from './components/SimpleHook/HookCounterTow';
//import HookcounterThree from './components/SimpleHook/HookCounterThree';
//import HookCounterFour from './components/SimpleHook/HookCounterFour';
import UseEffectCounterOne from './components/HookUseEffect/UseEffectCounterOne';
import HookContainer from './components/HookUseEffect/MouseContainer';
import HookInterCounter from './components/HookUseEffect/HookIntervalCounter';
import DataFatching from './components/HookUseEffect/DataFatching';
import ContextC from './components/SimpleContext/ComponentC';
import UseContextExample from './components/SimpleContext/UseContextExample';
import Counter1 from './components/UserReducerExample/Counter1';
import Counter2 from './components/UserReducerExample/Counter2';
import ComponentA from './components/useReducerWithuseContext/FolderA/Componenta';
import ComponentB from './components/useReducerWithuseContext/FolderB/ComponentB';
import FocusInput from './components/UseRefHook/focusInput';

export const UserContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
   }
}

export const counterContext = React.createContext();


function App() {

  const[count, dispatch] = useReducer(reducer, initialState);

    return (
      <div className="App">
        <h1> Hello I am at home</h1>
      {/*
        <HookCounter />
        <HookCounterTow />
        <HookcounterThree />
        <HookCounterFour />

         <h1>Hook interval Counter</h1>
        <HookInterCounter />

      */}  

        <h1>UseEffectCounterOne</h1>
        <UseEffectCounterOne />
        <HookContainer />

       

        <h1>Data Fatching</h1>
        <DataFatching />

        <h1>Simple Context</h1>
        <UserContext.Provider value={'Venisha'}>
          <ContextC />
          <UseContextExample />
        </UserContext.Provider>

        <Counter1 />
        <Counter2 />

        <counterContext.Provider value={{counter: count, dispatch}}>
          <h2>Count = {count}</h2>
          <ComponentA />
          <ComponentB />
        </counterContext.Provider>

        <h2>useRef Example</h2>
        <FocusInput />
      </div>
    );
  }


  

export default App;
