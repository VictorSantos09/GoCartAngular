import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models';
import { AddToCartComponent } from '../buttons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [
    AddToCartComponent,
    RouterModule
  ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input()
  public product?: ProductModel;
}
