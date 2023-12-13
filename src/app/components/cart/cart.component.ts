import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products';
import { OrderModel } from '../../models/OrderModel';
import { CommonModule } from '@angular/common';
import { OrderService } from '../orders/services/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    OrderService
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public orders?: OrderModel[];
  public total: number = 0;
  public showCompleted: boolean = false;

  constructor(private productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
    this.calculateTotal();
  }

  getOrders(): void {
    this.orders = this.productService.getAllFromCart();
  }

  calculateTotal(): void {
    this.total = 0;

    this.orders?.forEach(o => {
      this.total += o.amount.valueOf() * o.product.price.valueOf();
    });
  }

  increment(order: OrderModel): void {
    order.amount = order.amount + 1;
    this.productService.updateAtCart(order);
    this.calculateTotal();
  }

  decrement(order: OrderModel): void {
    if (order.amount > 1) {
      order.amount = order.amount - 1;
      this.productService.updateAtCart(order);
      this.calculateTotal();
    }
  }

  finalizeOrder(): void {
    this.orders?.forEach(o => {
      this.orderService.finalizeOrder(o);
      this.productService.removeFromCart(o.id);
    });

    this.showCompleted = true;
    this.startCountdown();
  }

  startCountdown(): void {
    let intervalId = setInterval(() => {
      this.showCompleted = false;
      clearInterval(intervalId);
      window.location.href = "/"
    }, 5000)
  }

  remove(order: OrderModel): void{
    this.productService.removeFromCart(order.id);
    window.location.reload();
  }
}
