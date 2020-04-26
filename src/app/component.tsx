import React, { useEffect, useMemo, useState } from "react";
import "./component.css";
import { CurrencySymbol, CurrencyRates, Dictionary } from "../contracts";
import fx from "../money";
import NumberInput from './numberInput';

declare const window: any;

export type AppProps = {
  currency?: Map<string, CurrencySymbol>;
  rates?: CurrencyRates;
  getConversionRate: (rates: string) => void;
};

export default ({ currency, rates, getConversionRate }: AppProps) => {
  const currencyList = useMemo(() => Object.keys(currency || {}), [currency]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    getConversionRate(fromCurrency);
  }, [fromCurrency]);

  useEffect(() => {
    if (!window.fx || !rates) {
      return;
    }
    window.fx.base = fromCurrency;
    window.fx.rates = rates[fromCurrency];
  }, [window.fx, rates, fromCurrency]);

  useEffect(() => {
    fx(window, undefined);
  }, []);

  function fromChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFromCurrency(e.target.value);
  }

  function toChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setToCurrency(e.target.value);
  }

  function convertCurrency(amount: string) {
    const convertedValue =
      fromCurrency === toCurrency
        ? amount
        : window.fx(amount).from(fromCurrency).to(toCurrency);

    setConvertedAmount(convertedValue);
  }

  const canConvertCurrency = useMemo(
    () => rates && rates[fromCurrency] && rates[fromCurrency]![toCurrency],
    [rates, fromCurrency, toCurrency]
  );

  return (
    <div className="App">
      <h2>Convert currency tool</h2>
      <div className="row">
        <label>From:</label>
        <select onChange={fromChange} value={fromCurrency}>
          {currencyList.sort().map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <label>To:</label>
        <select onChange={toChange} value={toCurrency}>
          {currencyList.sort().map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {!canConvertCurrency ? (
        <div className="row error">Cannot convert from {fromCurrency} to {toCurrency}</div>
      ) : (
        <>
          <div className="row">
            Enter amount {fromCurrency}:{" "}
            <NumberInput convertCurrency={convertCurrency}></NumberInput>
          </div>
          <div className="row">
            Converted to {toCurrency}: {convertedAmount}
          </div>
        </>
      )}
    </div>
  );
};
