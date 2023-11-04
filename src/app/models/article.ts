import { Product } from "./product";

export class Article {
  id?: string;
  product?: Product;
  total: number = 0;
  quantity: number = 0;
}
