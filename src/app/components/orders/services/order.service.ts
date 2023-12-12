import { Injectable, OnInit } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {
  private lastID: number = 0;

  constructor() { }
  ngOnInit(): void {
    this.setLastID();
  }

  setLastID(): void {
    this.getAll().then((data) => {
      let lastOrder = data[data.length - 1];

      if (lastOrder === undefined || lastOrder === null) {
        this.lastID = 1;
      }

      else {
        this.lastID = lastOrder.id++;
      }
    });
  }

  async finalizeOrder(order: OrderModel): Promise<void> {
    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'id': this.lastID,
          'amount': order.amount,
          'product': {
            'id_product': order.product.id,
            'name': order.product.name,
            'description': order.product.description,
            'price': order.product.price,
            'image': {
              'url': order.product.image.url,
              'alt': order.product.image.alt
            }
          }
        })
    });

    this.lastID = this.lastID + 1;
  }

  async getAll(): Promise<OrderModel[]> {
    return fetch("http://localhost:5000/orders")
      .then((data) => data.json())
      .then((data) => data as OrderModel[]);
  }
}
