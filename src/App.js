import React, { useState } from 'react';

function App() {

 const [entries, setEntries] = useState([{weight: 175, date:'1-23-23'}, {weight: 181, date:'2-23-23'}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
