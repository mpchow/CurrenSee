import React from 'react';
import './App.css';
import Graph from '../Graph/Graph';
import Input from '../Input/Input';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-title">Currency Converter</h1>
      </div>

      <div className="App-body">
        <Input />
        <Graph />
      </div>
      
    </div>
  );
}

export default App;
