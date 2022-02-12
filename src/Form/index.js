import React, { useState } from "react";
import "./style.css";
import { currencies } from '../currencies';
import Result from "./Result";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>
                <p>
                    <label>
                        Kwota w PLN*:
                        <input
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
                        Wybierz walutę:
                        <select
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
                        </select>
                    </label>
                </p>
            </fieldset>
            <p className="form__result">
                <p> <strong>Otrzymasz:</strong></p>
                <Result result={result} />
            </p>
            <p>
                <button type="submit" className="form__submitButton">Przelicz</button>
            </p>
        </form>
    )
};

export default Form;