import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from '../stars/stars.component';
import { FormsModule } from '@angular/forms';
import { convertToSpaces } from './convert-to-spaces.pipe';

@NgModule({
  // declare the components, pipes used by this module
  declarations: [StarsComponent, convertToSpaces],
  imports: [CommonModule],
  // export to share with other modules
  exports: [StarsComponent, CommonModule, FormsModule, convertToSpaces],
})
export class SharedModule {}
