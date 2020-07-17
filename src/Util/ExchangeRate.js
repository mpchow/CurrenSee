//This is for requesting the data from the api


const exchange = {
   //Retrieves the current conversion between two currencies
   convert(baseCurrency, returnCurrency) {
      return fetch(`https://api.exchangeratesapi.io/latest?symbols=${returnCurrency},${baseCurrency}`)
      .then(res => res.json())
      .then(jsonResponse => {
         if(jsonResponse) {
            return (jsonResponse.rates[returnCurrency] / jsonResponse.rates[baseCurrency]);
         }
      });
   },
   //Retrives the historical data from the API betweeen a start year and the current date
   historical(baseCurrency, returnCurrency, startDate) {
      const date = new Date();
      //Create a string to represent the current day today
      const today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(); 
      return fetch(`https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${today}&base=${baseCurrency}`)
      .then(res => res.json())
      .then(jsonResponse => {
         if(jsonResponse) {
            //Since jsonResponse.rates is an object we need to then just map the keys 
            return Object.keys(jsonResponse.rates).map(date => ({date:date, rate:jsonResponse.rates[date][returnCurrency]}));
         }
      })

   }

   
}

export default exchange;