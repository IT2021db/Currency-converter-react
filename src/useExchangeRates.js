import { useEffect, useState } from "react";

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({
        state: "loading",
    });
    const apiURL = process.env.REACT_APP_APIURL;
    // const apiURL = "currency-converter-react/currency.json";
  
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(apiURL);

                console.log('response w useExchangeRates:')
                console.log(response)
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { data, meta } = await response.json();

                setExchangeRates({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });

            }
            catch (error) {
                setExchangeRates({ state: "error" });
                console.log("Something bad has happened", error);
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);
    console.log("exchangerates pobrane")
    console.log(exchangeRates.rates)

    return exchangeRates;

};