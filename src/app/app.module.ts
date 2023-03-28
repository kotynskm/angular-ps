import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarsComponent } from './stars/stars.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductModule } from './products-list/product.module';

@NgModule({
  // these are private by default (what belongs to this module) and cannot be accessed by other modules - can be shared by exporting them
  declarations: [AppComponent],
  // use the exports array to share components, directives, modules, and pipes
  exports: [],
  // import our own modules, or other angular modules that this module needs to work
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ProductModule],
  providers: [],
  // starting point of the application (root) in the index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
