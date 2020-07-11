import React from 'react';
import './App.css';
import Graph from '../Graph/Graph';
import Input from '../Input/Input';
import exchange from '../../Util/ExchangeRate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
      currFrom: formData.get('currFrom'),
      currTo: formData.get('currTo'),
      amount: formData.get('amount')
    };

    console.log(typeof data.currFrom);

    exchange.search(data.currFrom, data.currTo)
    .then(rate => this.setState({rate: rate, data: data}));
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <div>
            <h1 className="App-title">Currency Conversion</h1>
            <Input onSubmit={this.handleSubmit}/>
          </div>

          <div>
            <h1 className="App-title">Historical Trends</h1>
            <Input onSubmit={this.handleSubmit}/>
          </div>
        </div>

        <div className="App-body">


          <div className="App-body-conversion">
            {this.state.data ? <p>{this.state.data.amount} {this.state.data.currFrom} = {this.state.rate*this.state.data.amount} {this.state.data.currTo}</p> : null} 
          </div>


          <div className="App-graphs">
            <Graph />

          </div>

        </div>


      </div>
    );
  }
}

export default App;
