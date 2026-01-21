import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  imports: [CommonModule],
  templateUrl: './sales-person-bootstrap-list.html',
  styleUrl: './sales-person-list.css',
})
export class SalesPersonList {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Karan","pathak","kp@gmail.com",200),
    new SalesPerson("rahul","pathak","rahul@gmail.com",500),
     new SalesPerson("paul","jane","paul@gmail.com",800)
  ];

}
