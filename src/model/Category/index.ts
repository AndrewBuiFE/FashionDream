export default class Category {
  Id: number;
  Name: string;
  ListProduct: object;
  constructor(category = null) {
    this.Id = category && category.Id ? category.Id : 1;
    this.Name = category && category.Name ? category.Name : '';
    this.ListProduct =
      category && category.ListProduct ? category.ListProduct : null;
  }
}
