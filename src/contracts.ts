export interface CurrencySymbol {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

export interface StoreState {
  currency: Map<string, CurrencySymbol>
}
