import { Injectable } from '@angular/core';
import { ProductModel } from '../../../models';
import { OrderModel } from '../../../models/OrderModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllFromCart(): OrderModel[] {
    const orders = localStorage['orders'];
    return orders ? JSON.parse(orders) : [];
  }

  AddToCart(productToBuy: ProductModel): void {
    const orders = this.getAllFromCart();

    if (orders.length === 0 || orders === null || orders === undefined) {
      let orderId = new Date().getTime();
      let newOrder = new OrderModel(orderId, productToBuy, 1);

      orders.push(newOrder);
      localStorage['orders'] = JSON.stringify(orders);
    }

    else {
      let orderId = new Date().getTime();

      let newOrder = new OrderModel(orderId, productToBuy, 1);
      orders.push(newOrder);
      localStorage['orders'] = JSON.stringify(orders);
    }
  }

  getByIdFromCart(id: Number): OrderModel {
    const orders = this.getAllFromCart();

    return orders.find(t => t.id === id)!;
  }

  updateAtCart(order: OrderModel): void {
    const orders = this.getAllFromCart();

    orders.forEach((obj, index, objs) => {
      if (order.id === obj.id) {
        objs[index] = order;
      }
    });

    localStorage['orders'] = JSON.stringify(orders);
  }

  removeFromCart(id: number): void {
    let order = this.getAllFromCart();

    order = order.filter(t => t.id !== id);
    localStorage['orders'] = JSON.stringify(order);
  }
}

