import { useEffect, useState } from "react";

export const useRatesApi = () => {
    const [ratesApi, setRatesApi] = useState({
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
                setRatesApi({
                    state: "success",
                    rates,
                    date,
                });
            }
            catch (error) {
                setRatesApi({ state: "error" });
                console.log("Something bad has happened", error);
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);
    return ratesApi;
};