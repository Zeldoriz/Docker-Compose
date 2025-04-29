import { database } from '../../db/connectDB';
import Product from './product.interface';

export default class ProductsService {
  constructor() {}

  static table = 'products';

  static async createProduct(product: Product): Promise<any> {
    try {
      const res = await database(this.table).insert(product);
      return await database(this.table).where({ product_id: res[0] });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }
}
