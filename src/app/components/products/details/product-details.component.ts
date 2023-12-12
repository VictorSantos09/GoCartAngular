import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models';
import { AddToCartComponent } from '../buttons';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services';
import { ApihandlerService } from '../../../shared/products/apihandler.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    AddToCartComponent,
    RouterModule
  ],
  providers: [
    ProductService,
    ApihandlerService
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  public product?: ProductModel;


  constructor(private orderService: ProductService,
    private apiHandlerService: ApihandlerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.apiHandlerService.buscarProdutos().then((products) => {
      this.product = products.find(p => p.id == id);
    })
  }
}
