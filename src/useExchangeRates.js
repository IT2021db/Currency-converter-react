import { useEffect, useState } from "react";

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({
        state: "loading",
    });
    const apiURL = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(apiURL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();
                setExchangeRates({
                    state: "success",
                    rates,
                    date,
                });
            }
            catch (error) {
                setExchangeRates({ state: "error" });
                console.log("Something bad has happened", error);
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);
    return exchangeRates;
};