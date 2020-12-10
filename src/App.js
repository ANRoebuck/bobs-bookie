import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayPrices from "./DisplayPrices";
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
