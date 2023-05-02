import getHttpClient from './axios';

import { Product } from '../types';

class ProductService {
  async getAll(): Promise<Product[]> {
    const httpClient = await getHttpClient({});

    const res: { data: Product[] } = await httpClient.get('/product');

    return res.data;
  }

  async edit(data: Partial<Product>): Promise<void> {
    const httpClient = await getHttpClient({ headers: { 'Content-Type': 'multipart/form-data' } });

    await httpClient.put('/product', data);
  }
}

const productService: ProductService = new ProductService();

export default productService;
