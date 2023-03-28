import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  pageTitle: string = 'Product Details';

  // use activated route methods to get id from url and then product service method to get product
  // use Router to use navigate
  constructor(private route: ActivatedRoute, private router: Router) {}

  // executed on component load, let's load the product from the id
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  // using Router navigate method to travel back to products page
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
