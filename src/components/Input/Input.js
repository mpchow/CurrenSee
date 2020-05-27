import React from 'react';
import './Input.css'

const currCodes = ['AED', 'ARS', 'AUD', 'BGN', 'BRL', 'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK',
'DKK', 'DOP', 'EGP', 'EUR', 'FJD', 'GBP', 'GTQ', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY',
'KRW', 'KZT', 'MXN', 'MYR', 'NOK', 'NZD', 'PAB', 'PEN', 'PHP', 'PKR', 'PLN', 'PYG', 'RON', 'RUB', 'SAR',
'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'UYU', 'ZAR'];

class Input extends React.Component {
   render() {
      return (
      <div className="Input">
         <form>
            <select id="currFrom" name="currFrom">
               <option value={null}>Currency From</option>
               {currCodes.map( code => {return <option value={code}>{code}</option>})}
            </select>
            <select id="currTo" name="currTo">
               <option value={null}>Currency To</option>
               {currCodes.map( code => {return <option value={code}>{code}</option>})}
            </select>
            <input type="number" id="amount" name="amount" placeholder="Amount"></input>
            <input type="submit"></input>
         </form>
      </div>);
   }
}

export default Input;