import React from "react";

const Result = ({ result }) => (
    <p >
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={""}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;PLN&nbsp;{result.currency}
                </strong>
                <p>
                    Aktualny kurs:&nbsp;{result.rate.toFixed(2)}&nbsp;{result.currency}
                </p>
            </>
        )}

    </p>
)

export default Result;
