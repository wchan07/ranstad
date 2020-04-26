import React, { useEffect, useMemo, useState, useRef } from "react";

export type AppProps = {
  convertCurrency: (amount: string) => void;
};

export default ({ convertCurrency }: AppProps) => {
  const myRef: any = useRef(null);
  const validKeyCodes = [
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    190,
    8,
    37,
    38,
    39,
    40,
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const sanitizedValue = formatValue(myRef.current.value);
    myRef.current.value = sanitizedValue;
    convertCurrency(sanitizedValue);
  }

  function formatValue(amount) {
    let stripped = parseInt(amount.replace(".", ""), 10).toString();
    switch (stripped.length) {
      case 0:
        return "";
      case 1:
        return "0.0" + stripped;
      case 2:
        return "0." + stripped;
      default:
        return (
          stripped.substring(0, stripped.length - 2) +
          "." +
          stripped.substring(stripped.length - 2)
        );
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const { which } = e;

    if (!validKeyCodes.includes(which)) {
      e.preventDefault();
    }
    let periodCount = 0;
    const value = myRef.current.value;
    for (let x = 0; x < value.length; x++) {
      let c = value.charAt(x);
      if (c === ".") {
        periodCount++;
      }
    }
    if (periodCount && which === 190) {
      e.preventDefault();
    }
  }

  const handleMoveSelectionPress = () => {
    const el = myRef.current;
    console.log(el, el.sel);
    setTimeout(() => (el.selectionStart = el.selectionEnd = el.value.length));
  };

  return (
    <input
      ref={myRef}
      type="text"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleMoveSelectionPress}
    />
  );
};
