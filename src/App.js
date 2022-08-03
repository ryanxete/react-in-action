import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

 const [entries, setEntries] = useState([{weight: 175, date:'1-23-23'}, {weight: 181, date:'2-23-23'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
