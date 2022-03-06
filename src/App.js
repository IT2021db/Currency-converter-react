import React, { useState } from 'react';
import Form from './Form';
import { Wrapper } from "./styled";
import { useRatesApi } from "./useRatesApi";

function App() {
  const [result, setResult] = useState();
  const ratesApi = useRatesApi();

  const calculateResult = (currency, amount) => {
    const rate = ratesApi.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
      exchangeRate: 1 / rate,
    });
  }

  return (
    <Wrapper>
      <Form
        calculateResult={calculateResult}
        result={result}
        ratesApi={ratesApi}
      />
    </Wrapper>)
}

export default App;
