import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../products';
import { MainpageService } from './sevices';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent,
    FormsModule
  ],
  providers: [
    MainpageService
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  public productsToShow?: ProductModel[];
  public allProducts?: ProductModel[];
  public productToFilter: string = "";

  constructor(private mainpageService: MainpageService) { }

  ngOnInit(): void {
    this.mainpageService.buscarProdutos().then((data) => {
      this.productsToShow = data;
      this.allProducts = data;
    });
  }



  filterProducts(): void {
    if (this.productToFilter == "") {
      this.productsToShow = this.allProducts;
    } else {
      var results = this.allProducts?.filter(p => p.name.includes(this.productToFilter));
      this.productsToShow = results;
    }
  }
}
