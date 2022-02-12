import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
                <p>
                    Kurs&nbsp;{result.currency}&nbsp;wynosi:&nbsp;{result.rate}PLN
                </p>
            </>
        )}
    </p>
);

export default Result;