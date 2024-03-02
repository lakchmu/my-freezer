export interface Product {
  id: number;
  name: string;
  unit: Unit;
  amount: number;
  limit: number;
  price: number;
  uri?: string;
  barcode?: string;
}

export enum Unit {
  PIECE = 'PIECE',
  GRAM = 'GRAM',
}
