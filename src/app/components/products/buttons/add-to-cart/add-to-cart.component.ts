import { Component, Input } from '@angular/core';
import { ProductService } from '../../services';
import { ProductModel } from '../../../../models';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  providers: [
    ProductService
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input()
  public productToAdd?: ProductModel;

  constructor(private productService: ProductService) { }

  adicionar(): void {
    if (this.productToAdd === null || this.productToAdd === undefined) {
      return;
    }

    this.productService.AddToCart(this.productToAdd);
  }
}
