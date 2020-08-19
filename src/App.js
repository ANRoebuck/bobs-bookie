import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayPrices from "./DisplayPrices";

function App() {

  const [refreshes, setRefreshes] = useState(true);
  const [timeoutId, setTimeoutId] = useState(0);

  useEffect(() => {
      if (refreshes) {
        let timeout = setTimeout(() => {
          refreshes && window.location.reload(true)
        }, 5000);
        setTimeoutId(timeout);
      } else {
        clearTimeout(timeoutId);
        setTimeoutId(0);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refreshes]);
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
