import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // inject the product service
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  showImage: boolean = false;
  errorMessage: string = '';
  // bang operator lets ts know we plan to declare this later in the code
  sub!: Subscription;

  // getter and setter for input value
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  // declare properties
  products: IProduct[] = [];

  filteredProducts: IProduct[] = [];

  // this is where we initially declared our products before adding it to the service
  // products: IProduct[] = [
  //   {
  //     productId: 2,
  //     productName: 'Hammer',
  //     productCode: 'GDN-0023',
  //     releaseDate: 'March 18, 2021',
  //     description: 'Claw steel hammer',
  //     price: 8.9,
  //     starRating: 4.8,
  //     imageUrl: 'assets/images/hammer.png',
  //   },
  // ];

  // use life cycle hooks to get data and stage the component at initialization, so call the service method
  // inside her to get the product list
  ngOnInit(): void {
    this.listFilter = '';
    // store the subscription in a variable so that we can unsubscribe from it later
    // http actually cleans itself up and we don't need to store it in sub, we only need for events that keep emitting
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.filteredProducts = this.products;
  }

  // unsubscribe
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    // toggle true or false based, bang operator will give us the opposite of what is currently set
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  // get the data passed from the child component using Output and event emitter
  onNotify(message: string): void {
    console.log(message);
    this.pageTitle = this.pageTitle + ' ' + message;
  }
}
