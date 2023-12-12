import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './details';

export const ProductsRoutes: Routes = [
  {
    path: "products/details/:id",
    component: ProductDetailsComponent
  }
]