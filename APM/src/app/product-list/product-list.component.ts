import { Component, OnInit } from '@angular/core';
import { Iproduct } from './pruductModel';
import { ProductService } from './product-service';

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
    
  ];

  constructor(private productService:ProductService) { 

  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }
}
