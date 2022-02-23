import React, { useEffect, useState } from "react";
import "./style.css";
import { useCurrentDate } from "./useCurrenDate";

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
    const date =useCurrentDate();

    return (
        <div className="clock">
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </div>
    )
};