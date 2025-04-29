import { Response, Request } from 'express';

import ProductsService from './products.service';
import Payload from '../users/payload.interface';
import Product from './product.interface';

export default class ProductsController {
  constructor() {}

  static async createProduct(req: Request, res: Response): Promise<any> {
    const newProduct: Product = {
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price
    };

    const payload: Payload = {
      clientPayload: newProduct,
      responsePayload: await ProductsService.createProduct(newProduct),
      time: new Date().toISOString()
    };

    return res.json(payload);
  }
}
