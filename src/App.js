import React, { useState } from 'react';
import './App.css';
import SchemaGeneration from "./SchemaGeneration";
import SchemaApplication from "./SchemaApplication";

function App() {

  const [toggle, setToggle] = useState(true);


  return (
    <div className="App">
      <div onClick={() => setToggle(toggle => !toggle)}>
        {toggle ? 'Schema Generation' : 'Schema Application'}
      </div>
      { toggle
      ? <SchemaGeneration />
      : <SchemaApplication /> }
    </div>
  );
}

export default App;
