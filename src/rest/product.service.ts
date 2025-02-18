import getHttpClient from './axios';

import { Product } from '../types';

class ProductService {
  async getAll(query?: any): Promise<Product[]> {
    const httpClient = await getHttpClient({});

    let url = '/product';

    if (query && query.toBuy) {
      url = '/product?toBuy=true';
    }

    const res: { data: Product[] } = await httpClient.get(url);

    return res.data;
  }

  async create(data: FormData): Promise<void> {
    const httpClient = await getHttpClient({ headers: { 'Content-Type': 'multipart/form-data' } });

    await httpClient.post('/product', data);
  }

  async edit(id: number, data: Partial<Product> | FormData): Promise<void> {
    const httpClient = await getHttpClient({ headers: { 'Content-Type': 'multipart/form-data' } });

    await httpClient.put(`/product/${id}`, data);
  }

  async remove(id: number): Promise<void> {
    const httpClient = await getHttpClient({});

    await httpClient.delete(`/product/${id}`);
  }
}

const productService: ProductService = new ProductService();

export default productService;
