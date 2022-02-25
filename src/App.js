import React, { useState } from 'react';
import Form from './Form';
import { currencies } from './currencies';
import "./index.css";
import {Wrapper} from "./styled";

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
    <Wrapper>
      <Form
        calculateResult={calculateResult}
        result={result}
      />
    </Wrapper>)
}

export default App;
