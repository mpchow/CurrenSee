//This is for requesting the data from the api


const exchange = {
   search(baseCurrency, returnCurrency) {
      return fetch(`https://api.exchangeratesapi.io/latest?symbols=${baseCurrency},${returnCurrency}`)
      .then(res => res.json())
      .then(jsonResponse => {
         if(jsonResponse) {
            return jsonResponse.rates[baseCurrency];
         }
      });
   }
}

export default exchange;