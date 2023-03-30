export interface Product {
  id: number;
  name: string;
  unit: Unit;
  amount: number;
  limit: number;
  uri?: string;
}

export enum Unit {
  PIECE = 'PIECE',
  GRAMS = 'GRAMS',
}
