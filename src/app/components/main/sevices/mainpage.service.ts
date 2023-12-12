import { Injectable } from '@angular/core';
import { ProductModel } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  constructor() { }
  async buscarProdutos(): Promise<ProductModel[]> {
    return fetch("http://localhost:5000/products")
      .then((data) => data.json())
      .then((data) => data as ProductModel[]);
  }
}
