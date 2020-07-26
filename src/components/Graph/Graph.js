import React from 'react';
import Chart from 'chart.js';
import './Graph.css';
//Use chart.js here
let myLineChart;

class Graph extends React.PureComponent {
   chartRef = React.createRef();


   chartRef = React.createRef();

   componentDidMount() {
       this.buildChart();
   }

   componentDidUpdate() {
       this.buildChart();
   }

   buildChart = () => {
       const myChartRef = this.chartRef.current.getContext("2d");
       const data = this.props.data.dates.map(item => { return {rate: item.rate, date: new Date(item.date)};}).sort((a, b) => a.date - b.date);
       const dates = data.map(date => `${date.date.getMonth()}-${date.date.getDate()}-${date.date.getYear()+1900}` );
       const rates = data.map(date => date.rate);

       myLineChart = new Chart(myChartRef, {
           type: "line",
           data: {
               //Bring in data
               labels: dates,
               datasets: [
                   {
                       label: "Rate",
                       data: rates,
                   }
               ]
           },
           options: {
               title: {
                   display: true,
                   text: `${this.props.data.input.currTo} in relation to ${this.props.data.input.currFrom}`
               }

           }
       });
    }


    render() {
       return (
        <div className="Graph">
           <button onClick={() => this.props.delete(this.props.data.id)}>Delete Graph</button>
           <canvas id="myChart" ref={this.chartRef}/>
        </div>);
   }
}

export default Graph;