import React, { useState } from "react";
import "./style.css";
import { currencies } from '../currencies';

const Form = ({calculateResult, result}) => {         //it only works without curly brackets in arguments
    const [currency, setCurrency] = useState([]);   // but comunicate is that calculateResult is not a function
    const [amount, setAmount] = useState("");       // with brackets form disappears, background image only

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (

        <form onSubmit={onSubmit} >
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
                <p>
                    Aktualny kurs: <strong >{calculateResult.rate}</strong>
                </p>
            </fieldset>
            <p className="form__result">
                Otrzymasz: <strong >{result.targetAmount}</strong>
            </p>
            <p>
                <button type="submit" className="form__button">Przelicz</button>
            </p>
            <p>
                <button
                    type="reset"
                    className="form__button form__button--reset"
                >Wyczyść</button>
            </p>
        </form>
    );
};

export default Form;