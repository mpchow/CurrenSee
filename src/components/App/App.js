import React from 'react';
import './App.css';
import Graph from '../Graph/Graph';
import Input from '../Input/Input';
import exchange from '../../Util/ExchangeRate';
import {v4 as uuidv4} from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {historic: [], renderGraphs: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteGraph = this.deleteGraph.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    //Retrieve the data from the form that was submitted
    const formData = new FormData(event.target);

    //We want to check which form submitted the data and then properly set the state
    if (formData.get('amount')) {
      const data = {
        currFrom: formData.get('currFrom'), 
        currTo: formData.get('currTo'), 
        amount: formData.get('amount') 
      };

      exchange.convert(data.currFrom, data.currTo)
      .then(rate => this.setState({rate: rate, data: data}));

    }
    else {
      const data = {
        currFrom: formData.get('currFrom'), 
        currTo: formData.get('currTo'), 
        baseYear: formData.get('baseYear') 
      };
      
      //In this case, we may have multiple graphs with historical data, so we want to set state to be able to render them all
      exchange.historical(data.currFrom, data.currTo, data.baseYear+"-01-01")
      .then(dates => this.setState((state) => {
        return {rate: state.rate, data: state.data, historic: [...state.historic, {id: uuidv4(), dates: dates, input: data}], renderGraphs: true};
      }));

    }
  }

  deleteGraph(id) {
    this.setState({historic: this.state.historic.filter(item => item.id !== id)});
    console.log(this.state.historic);
    this.render();
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <div>
            <h1 className="App-title">Currency Conversion</h1>
            <Input onSubmit={this.handleSubmit} type={"Conversion"}/>
          </div>

          <div>
            <h1 className="App-title">Historical Trends</h1>
            <Input onSubmit={this.handleSubmit} type={"Trends"}/>
          </div>
        </div>

        <div className="App-body">
          <div className="App-body-conversion">
            {this.state.data && <p>{this.state.data.amount} {this.state.data.currFrom} = {this.state.rate*this.state.data.amount} {this.state.data.currTo}</p> } 
          </div>

          <div className="App-graphs">
            {this.state.historic.map(timePeriod =>  <Graph data={timePeriod} delete={this.deleteGraph} />)}
          </div>

        </div>


      </div>
    );
  }
}

export default App;
