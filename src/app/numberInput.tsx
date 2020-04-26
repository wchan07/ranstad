import React, { useEffect, useMemo, useState } from "react";

export type AppProps = {
  convertCurrency: (amount: string) => void;
};

export default ({ convertCurrency }: AppProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    convertCurrency(e.target.value);
  }

  return (
    <input type="number" onChange={handleChange} />    
  );
};
