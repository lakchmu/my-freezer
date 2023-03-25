import { Product, Unit } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Bread',
    unit: Unit.PIECE,
    amount: 4,
    limit: 10,
    uri: 'https://img.freepik.com/premium-vector/cartoon-long-loaf-loaves-bread-wicker-basket-with-cloth-napkin-vector-illustration-baking-cartoon-childish-style-isolated-funny-bread-clipart-cute-print_456865-1800.jpg',
  },
  {
    id: 2,
    name: 'Caviar',
    unit: Unit.PIECE,
    amount: 3,
    limit: 10,
    uri: 'https://cdn.shopify.com/s/files/1/0012/7788/6530/products/SalmonRoe_1200x1200.png',
  },
  {
    id: 3,
    name: 'Cheez',
    unit: Unit.PIECE,
    amount: 3,
    limit: 10,
    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Yogurt-40da58e.jpg',
  },
];
