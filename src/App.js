import React, { useState } from 'react';
import Form from './Form';
import { currencies } from './currencies';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
      rate,
    });
  }

  return (
    <div>
      <Form
        calculateResult={calculateResult}
        result={result}
      />
    </div>)
}

export default App;
