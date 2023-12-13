import { Routes } from '@angular/router';
import { MainComponent, ProductsRoutes } from './components';
import { CartComponent } from './components/cart';
import { MyordersComponent } from './components/myorders/myorders.component';

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
        path: "orders",
        component: MyordersComponent
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
    {
        path: "orders",
        redirectTo: "orders",
        pathMatch: 'full'

    },
    ...ProductsRoutes
];
