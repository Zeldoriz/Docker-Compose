import Product from '../products/product.interface';
import User from './user.interface';

export default interface Payload {
  clientPayload: string | Product | null;
  responsePayload: User | User[] | null;
  time: string;
}
