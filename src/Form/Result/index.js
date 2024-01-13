import React from "react";
import { Info, Expected } from "./styled";

const Result = ({ result, exchangeRates }) => {
    const date = new Date(exchangeRates.date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
console.log("result")
console.log(result)
    return (
        <div>
            {!!result && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                    <Expected>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </Expected>
                    <Info>
                        Kurs&nbsp;{result.currency}&nbsp;wynosi:&nbsp;{result.exchangeRate.toFixed(3)}&nbsp;PLN<br />
                        z dnia:&nbsp;{formattedDate}
                    </Info>
                </>
            )}
        </div>
    );
};
export default Result;