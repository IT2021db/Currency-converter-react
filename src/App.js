import React, { useState } from 'react';
import Form from './Form';
import { Wrapper } from "./styled";
import { useExchangeRates } from "./useExchangeRates";

function App() {
  const [result, setResult] = useState();
  const exchangeRates = useExchangeRates();

  const calculateResult = (currency, amount) => {
    const rate = exchangeRates.rates[currency];
    const currencyRate = rate.value;
  
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * currencyRate,
      currency,
      exchangeRate: 1 / currencyRate,
    });
  }

  return (
    <Form
      calculateResult={calculateResult}
      result={result}
      exchangeRates={exchangeRates}
    />
  )
}

export default App;
