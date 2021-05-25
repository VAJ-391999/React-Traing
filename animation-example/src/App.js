import React, { useState } from 'react';
import Model from './components/Model/Model';
import './App.css';

function App() {

  const[displayModel, setModel] = useState(false);

  return (
    <div className="App">
     <h1>React Animation Example</h1>
     <button onClick={() => {setModel(!displayModel)}}>Model Open</button>
     {displayModel ? <Model closeClicked={() => {setModel(!displayModel)}} show={displayModel} /> : null}
     
    </div>
  );
}

export default App;
