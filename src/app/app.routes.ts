import { Routes } from '@angular/router';
import { MainComponent, ProductsRoutes } from './components';
import { CartComponent } from './components/cart';

export const routes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "homepage",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "viewcart",
        redirectTo: "cart",
        pathMatch: "full"
    },
    ...ProductsRoutes
];
