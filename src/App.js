import React, { useState } from 'react';
import Form from './Form';
import { currencies } from './currencies';
import { Wrapper } from "./styled";
import { useRatesData } from "./useRatesData";

function App() {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];   //co to jest za zapis?

    // currencies
    // .find(({ short }) => short === currency)
    // .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  return (
    <Wrapper>
      <Form
        calculateResult={calculateResult}
        result={result}
        ratesData={ratesData}
      />
    </Wrapper>)
}

export default App;
