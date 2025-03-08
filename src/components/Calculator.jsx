import React, { useState } from "react";
import { evaluate } from "mathjs";
const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "C"
];
export default function Calculator() {
  const [input, setInput] = useState("");
  function handleClick(value) {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      //run math operation
      try {
        const result = evaluate(input).toString();
        setInput(result);
      } catch (error) {
        setInput("Error. Try again");
      }
    } else {
      setInput(prevValue => prevValue + value);
    }
  }
  return (
    <div className="calculator">
      <div className="display">
        {input || "Awesome Calc"}
      </div>
      <div className="buttons">
        {buttons.map((value, index) => {
          return (
            <button
              key={index}
              className={
                value === "C"
                  ? "clear"
                  : value === "="
                    ? "equals"
                    : ["/", "*", "-", "+"].includes(value) ? "operator" : ""
              }
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
