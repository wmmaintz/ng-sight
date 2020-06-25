import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.less']
})
export class SectionOrdersComponent implements OnInit {
  customers: Customer[] = [
    {id: 1, name: 'Main St Bakery', email: 'mainst@example.com', state: 'CO'},
    {id: 2, name: 'Main St Bakery', email: 'mainst@example.com', state: 'CO'},
    {id: 3, name: 'Main St Bakery', email: 'mainst@example.com', state: 'CO'},
    {id: 4, name: 'Main St Bakery', email: 'mainst@example.com', state: 'CO'},
    {id: 5, name: 'Main St Bakery', email: 'mainst@example.com', state: 'CO'}
  ];
  orders: Order[] = [
    {id: 1, customer: this.customers[0], total: 230, placed: new Date(2017, 11, 1), fulfilled: new Date(2017, 12, 3), status: 'Completed' },
    {id: 2, customer: this.customers[1], total: 230, placed: new Date(2017, 11, 2), fulfilled: new Date(2017, 12, 4), status: 'Completed' },
    {id: 3, customer: this.customers[2], total: 230, placed: new Date(2017, 11, 3), fulfilled: new Date(2017, 12, 5), status: 'Completed' },
    {id: 4, customer: this.customers[3], total: 230, placed: new Date(2017, 11, 4), fulfilled: new Date(2017, 12, 6), status: 'Completed' },
    {id: 5, customer: this.customers[4], total: 230, placed: new Date(2017, 11, 5), fulfilled: new Date(2017, 12, 7), status: 'Completed' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
