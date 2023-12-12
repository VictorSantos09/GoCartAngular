import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './buttons';
import { ProductDetailsComponent } from './details';
import { CardProductComponent } from './card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddToCartComponent,
    ProductDetailsComponent,
    CardProductComponent,
    RouterModule
  ]
})
export class ProductModule { }
