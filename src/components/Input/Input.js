import React from 'react';
import './Input.css'

const currCodes = ['AED', 'ARS', 'AUD', 'BGN', 'BRL', 'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK',
'DKK', 'DOP', 'EGP', 'EUR', 'FJD', 'GBP', 'GTQ', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY',
'KRW', 'KZT', 'MXN', 'MYR', 'NOK', 'NZD', 'PAB', 'PEN', 'PHP', 'PKR', 'PLN', 'PYG', 'RON', 'RUB', 'SAR',
'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'UYU', 'ZAR'];

class Input extends React.Component {
   constructor(props){
      super(props); 
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(event);
   }

   render() {
      return (
      <div className="Input">
         <form onSubmit={this.handleSubmit}>
            <select id="currFrom" name="currFrom">
               <option value={null}>Currency From</option>
               {currCodes.map( code => {return <option key={code} value={code}>{code}</option>})}
            </select>
            <select id="currTo" name="currTo">
               <option value={null}>Currency To</option>
               {currCodes.map( code => {return <option key={code} value={code}>{code}</option>})}
            </select>
            {this.props.type === "Conversion" ? <input type="number" id="amount" name="amount" placeholder="Amount"></input> :   <input type="number" id="baseYear" name="baseYear" placeholder="Start Year"></input>}
            <input type="submit"></input>
         </form>
      </div>);
   }
}

export default Input;