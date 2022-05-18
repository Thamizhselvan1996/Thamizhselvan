import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'designation'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}







export interface PeriodicElement {
  name: string;
  position: number;
  designation: String;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Aadhiran. K', designation: 'Junior executive', },
  {position: 2, name: 'Manju. B', designation: 'Junior executive', },
  {position: 3, name: 'Kamalesh. B', designation: 'Junior executive', },
  {position: 4, name: 'Inba. R', designation: 'Junior executive', },
  {position: 5, name: 'Roshika. P', designation: 'Junior executive', },
  {position: 6, name: 'Kevin. P', designation: 'Junior executive', },
  {position: 7, name: 'Prathish. R', designation: 'Junior executive',},
  {position: 8, name: 'Bhavani. D', designation: 'Senior executive', },
  {position: 9, name: 'Arunkumar. V', designation: 'Junior executive', },
  {position: 10, name: 'Jayanthi. K', designation: 'Senior executive', },
];
