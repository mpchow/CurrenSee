import React from 'react';
import Chart from 'chart.js';
//Use chart.js here

class Graph extends React.Component {
   chartRef = React.createRef();


   componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
   }


   render() {
      return (
      <div>
         <canvas id="myChart" ref={this.chartRef}/>
      </div>);
   }
}

export default Graph;