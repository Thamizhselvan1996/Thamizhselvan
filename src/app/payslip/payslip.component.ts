import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'payslip'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  payslip: String;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Aadhiran. K', payslip: 'April - 2022', },
  { position: 2, name: 'Manju. B', payslip: 'April - 2022', },
  { position: 3, name: 'Kamalesh. B', payslip: 'April - 2022', },
  { position: 4, name: 'Inba. R', payslip: 'April - 2022', },
  { position: 5, name: 'Roshika. P', payslip: 'April - 2022', },
  { position: 6, name: 'Kevin. P', payslip: 'April - 2022', },
  { position: 7, name: 'Prathish. R', payslip: 'April - 2022',},
  { position: 8, name: 'Bhavani. D', payslip: 'April - 2022', },
  { position: 9, name: 'Arunkumar. V', payslip: 'April - 2022', },
  { position: 10, name: 'Jayanthi. K', payslip: 'April - 2022', },
];