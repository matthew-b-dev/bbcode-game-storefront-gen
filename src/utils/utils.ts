export const convertCurrency = (currency: string) =>
  currency === 'dollar' ? '$' : currency === 'euro' ? '€' : '£';

export interface Game {
  name?: string;
  price?: string;
  url?: string;
  raw?: string;
}
