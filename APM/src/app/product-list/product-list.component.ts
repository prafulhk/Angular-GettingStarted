import { Component, OnInit } from '@angular/core';
import { Iproduct } from './pruductModel';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): Iproduct[] {

    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }



  filteredProducts: Iproduct[];
  products: Iproduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-001",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  constructor() { }
  ngOnInit(): void {
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
