import React, { useState } from "react";
import Result from "./Result";
import { Clock } from "./Clock";
import { Wrapper, Legend, Fieldset, Button, ResultBlock, Field, InformationApi } from "./styled";

const Form = ({ calculateResult, result, ratesApi }) => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <Wrapper onSubmit={onSubmit}>
            {ratesApi.state === "loading"
                ? (
                    <InformationApi>Trwa ładowanie danych z Europejskigo Banku Centralnego</InformationApi>
                )
                : (
                    ratesApi.state === "error"
                        ? (
                            <InformationApi>erroor Banku Centralnego</InformationApi>
                        )
                        : (
                            <>
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
                                                {Object.keys(ratesApi.rates).map(((currency) => (
                                                    <option
                                                        key={currency}
                                                        value={currency}
                                                    >
                                                        {currency}
                                                    </option>
                                                )))}
                                            </Field>
                                        </label>
                                    </p>
                                </Fieldset>
                                <ResultBlock>
                                    <p> <strong>Otrzymasz:</strong></p>
                                    <Result
                                        result={result}
                                        ratesApi={ratesApi}
                                    />
                                </ResultBlock>
                                <Button type="submit">Przelicz</Button>
                            </>
                        )
                )
            }
        </Wrapper>
    )
};

export default Form;