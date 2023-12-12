import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../products';
import { MainpageService } from './sevices';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent
  ],
  providers: [
    MainpageService
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  public products?: ProductModel[];

  constructor(private mainpageService: MainpageService) { }

  ngOnInit(): void {
    this.mainpageService.buscarProdutos().then((data) => {
      this.products = data;
    });
  }
}
