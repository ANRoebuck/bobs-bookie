import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayPrices from "./DisplayPrices";

// USE BOOLEAN TO CONFIGURE AUTOREFRESH OPTION
const includeAutoRefresh = true;



function App() {
  const [refreshes, setRefreshes] = useState(true);

  const [timeoutId, setTimeoutId] = useState(0);

  useEffect(() => {
      if(includeAutoRefresh) {
        if (refreshes) {
          let timeout = setInterval(() => {
            refreshes && window.location.reload(true)
          }, 1000);
          setTimeoutId(timeout);
        } else {
          clearInterval(timeoutId);
          setTimeoutId(0);
        }
      }
    }, [refreshes]);
  // NB: do NOT include timeoutId as a dependency as this will create a loop. Ignore lint.

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
