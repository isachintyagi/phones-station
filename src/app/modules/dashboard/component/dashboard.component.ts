import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableData: any[] = [
    { sNo: 1, productName: "Mobile Phone", brandName: "One Plus", defect: "Earpiece" },
    { sNo: 2, productName: "Tablet", brandName: "Lenovo", defect: "Screen Resolution" },
    { sNo: 3, productName: "Mobile Phone", brandName: "Samsung", defect: "Bluetooth Connectivity" },
    { sNo: 4, productName: "Mobile Phone", brandName: "iPhone", defect: "Speaker Volume" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
