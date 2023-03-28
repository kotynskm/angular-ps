import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-details/product-detail.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // no leading /, and order matters, router uses first win match, more specific routes should
  // be before less specific routes
  { path: 'products', component: ProductListComponent },
  // this route has a guard to validate the id
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailsComponent,
  },
  // default route to display on page load
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
