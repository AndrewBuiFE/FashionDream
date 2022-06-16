export default class Category {
  id: number;
  name: string;
  listProduct: object;
  constructor(category = null) {
    this.id = category && category.id ? category.id : 1;
    this.name = category && category.name ? category.name : '';
    this.listProduct =
      category && category.listProduct ? category.listProduct : null;
  }
}
