import React, { useState } from "react";

export default function Calculator() {
  function handleReset() {
    setBill("");
    setTip("");
    setNumOfPpl("");
  }

  let [tip, setTip] = useState();
  let [bill, setBill] = useState();
  let [numOfPpl, setNumOfPpl] = useState();
  let tipAmount = (bill * tip) / 100 / numOfPpl;
  let totalAmount = bill / numOfPpl + tipAmount;

  if (isNaN(tipAmount) || !isFinite(tipAmount)) tipAmount = "0.00";
  if (isNaN(totalAmount) || !isFinite(totalAmount)) totalAmount = "0.00";

  let cleanTipAmount = parseFloat(tipAmount).toFixed(2);
  let cleanTotalAmount = parseFloat(totalAmount).toFixed(2);
  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="fill-info">
          <label>
            <h4 className="mt2">Bill </h4>
            <input
              className="fill-input"
              type="number"
              name="bill"
              value={bill}
              onInput={(e) => setBill(e.target.value)}
              placeholder="0"
            />
          </label>
          <h4 className="mt2">Select Tip % </h4>
          <div className="select-tip">
            <button onClick={() => setTip([(tip = 5)], console.log(tip))}>
              5%
            </button>
            <button onClick={() => setTip([(tip = 10)])}>10%</button>
            <button onClick={() => setTip([(tip = 15)])}>15%</button>
            <button onClick={() => setTip([(tip = 25)])}>25%</button>
            <button onClick={() => setTip([(tip = 50)])}>50%</button>

            <input
              className="customTipInput"
              type="number"
              placeholder="Custom"
              value={tip}
              onInput={(e) => setTip(e.target.value)}
            />
          </div>
          <label>
            <h4 className="mt2">Number of People </h4>
            <input
              className="fill-input"
              type="number"
              placeholder="0"
              value={numOfPpl}
              onInput={(e) => setNumOfPpl(e.target.value)}
            />
          </label>
        </div>
        <div className="show-info">
          <label>
            <div>
              <h4>Tip Amount</h4>
              <span>/ person</span>
            </div>

            <h2>${cleanTipAmount}</h2>
          </label>
          <label className="mt2">
            <div>
              <h4>Total</h4>
              <span>/ person</span>
            </div>
            <h2>${cleanTotalAmount}</h2>
          </label>
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
