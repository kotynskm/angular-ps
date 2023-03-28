import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { convertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarsComponent } from '../stars/stars.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // declare all the components, pipes, etc used by this module
  declarations: [ProductListComponent, ProductDetailsComponent],
  // commonmodule is for ngFor, ngIf
  // we imported sharedmodule, so now we have access to commonmodule, formsmodule, starscomponent, and convertospaces pipe from there
  imports: [RouterModule, SharedModule],
})
export class ProductModule {}
