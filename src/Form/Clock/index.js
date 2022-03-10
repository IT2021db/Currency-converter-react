import React from "react";
import { useCurrentDate } from "./useCurrenDate";
import { Wrapper } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper className="clock">
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Wrapper>
    )
};