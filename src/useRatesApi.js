import { useEffect, useState } from "react";

export const useRatesApi = () => {
    const [ratesApi, setRatesApi] = useState({
        state: "loading",
        // date: 0,
        // rates: 0,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN")
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
                // console.error("sth bad happened", error);
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);
    return ratesApi;
};