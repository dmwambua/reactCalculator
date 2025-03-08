import React from "react";
export default function Calculator() {
const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
];
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {buttons.map((button,index) => {
            return <button key ={index}>{button}</button>;
          })}
      </div>
      </div>
      );
}
