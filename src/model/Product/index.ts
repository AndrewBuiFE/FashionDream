export default class Product {
  Id: number;
  CategoryId: number;
  Name: string;
  Description: string;
  AddedTime: string;
  Color: string;
  Brand: string;
  Size: string;
  Price: number;
  DiscountPercent: number;
  StoreStatus: string;
  NoComment: number;
  StarCount: number;
  Image: object;
  constructor(product = null) {
    this.Id = product && product.Id ? product.Id : 1;
    this.CategoryId = product && product.CategoryId ? product.CategoryId : 1;
    this.Name = product && product.Name ? product.Name : '';
    this.Description =
      product && product.Description ? product.Description : '';
    this.AddedTime = product && product.AddedTime ? product.AddedTime : '';
    this.Color = product && product.Color ? product.Color : '';
    this.Brand = product && product.Brand ? product.Brand : '';
    this.Size = product && product.Size ? product.Size : '';
    this.Price = product && product.Price ? product.Price : 0;
    this.DiscountPercent =
      product && product.DiscountPercent ? product.DiscountPercent : 0;
    this.StoreStatus =
      product && product.StoreStatus ? product.StoreStatus : '';
    this.NoComment = product && product.NoComment ? product.NoComment : 0;
    this.StarCount = product && product.StarCount ? product.StarCount : 0;
    this.Image = product && product.Image ? product.Image : null;
  }
}
