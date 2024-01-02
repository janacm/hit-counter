"use client";
import React from "react";

function Censored({ children }) {
  const [isCensored, setCensored] = React.useState(false);
  return (
    <p>
      You are visitor number{" "}
      <button
        className={isCensored ? "censored" : ""}
        onClick={() => setCensored(!isCensored)}
      >
        {children}
      </button>{" "}
    </p>
  );
}

export default Censored;
