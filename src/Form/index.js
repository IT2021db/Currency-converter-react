import React, { useState } from "react";
import { currencies } from '../currencies';
import Result from "./Result";
import { Clock } from "./Clock";
import { Wrapper, Legend, Fieldset, Button, ResultBlock, Field } from "./styled";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <Wrapper onSubmit={onSubmit}>
            <Fieldset>
                <Legend >Przelicznik walut</Legend>
                <Clock />
                <p>
                    <label>
                        Kwota w PLN*:{" "}
                        <Field
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w PLN"
                            type="number"
                            step="0.01"
                            required />
                    </label>
                </p>
                <p>
                    <label>
                        Wybierz walutę:{" "}
                        <Field
                            as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </Field>
                    </label>
                </p>
            </Fieldset>
            <ResultBlock>
                <p> <strong>Otrzymasz:</strong></p>
                <Result result={result} />
            </ResultBlock>
            <Button type="submit">Przelicz</Button>
        </Wrapper>
    )
};

export default Form;