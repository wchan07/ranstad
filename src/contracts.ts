export interface CurrencySymbol {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

export type CurrencyRates = Dictionary<Dictionary<number> | null>;

export interface StoreState {
  currency: Map<string, CurrencySymbol>;
  rates: CurrencyRates;
}

export interface RatesResponse {
  rates: Map<string, number>;
  base: string;
}

export interface Dictionary<T = any> {
  [key: string]: T;
}
