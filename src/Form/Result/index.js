import React from "react";
import { Info, Expected } from "./styled";

const Result = ({ result }) => (
    <div>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <Expected>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Expected>
                <Info>
                    Kurs&nbsp;{result.currency}&nbsp;wynosi:&nbsp;{(1/result.rate).toFixed(2)}&nbsp;PLN
                </Info>
            </>
        )}
    </div>
);

export default Result;