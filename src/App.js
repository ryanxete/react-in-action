import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {
 const [entries, setEntries] = useState([{weight: 175, date:'1-23-23'}, {weight: 181, date:'2-23-23'}])

 function addNewEntry(entry){
  let tempEntries = [...entries, entry]
  setEntries(tempEntries)
 }
 
  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>
    </div> 
  );
}

export default App;
