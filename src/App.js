import React, { useState } from 'react';
import './App.css';
import DisplayPrices from "./DisplayPrices";

function App() {

  const [refreshes, setRefreshes] = useState(true);

  const handleClick = () => setRefreshes(refreshes => !refreshes);

  return (
    <div className="App">
      <div className="refresh-toggle" onClick={handleClick}>
        {`Click to enable/disable autorefresh. Autorefresh is : ${refreshes} \n\n\n`}
      </div>
      <DisplayPrices/>
    </div>
  );
}

export default App;
