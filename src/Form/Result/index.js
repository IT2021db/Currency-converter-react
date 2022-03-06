import React from "react";
import { Info, Expected } from "./styled";

const Result = ({ result, ratesApi }) => (
    <div>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <Expected>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Expected>
                <Info>
                    Kurs&nbsp;{result.currency}&nbsp;wynosi:&nbsp;{result.exchangeRate.toFixed(3)}&nbsp;PLN<br />
                    z dnia:&nbsp;{ratesApi.date}
                </Info>
            </>
        )}
    </div>
);

export default Result;