import React from 'react';
import './App.css';
import Graph from '../Graph/Graph';
import Input from '../Input/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
      currFrom: formData.get('currFrom'),
      currTo: formData.get('currTo'),
      amount: formData.get('amount')
    };

    console.log(data);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Currency Converter</h1>
        </div>

        <div className="App-body">
          <Input onSubmit={this.handleSubmit}/>
          <Graph />
        </div>

      </div>
    );
  }
}

export default App;
