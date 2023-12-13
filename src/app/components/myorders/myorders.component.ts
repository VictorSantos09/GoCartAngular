import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/OrderModel';
import { CommonModule } from '@angular/common';
import { OrderService } from '../orders/services/order.service';

@Component({
  selector: 'app-myorders',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    OrderService
  ],
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent implements OnInit {
  public orders?: OrderModel[] = [];

  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getAll().then((data) => {
      this.orders = data;
    });
  }
}
