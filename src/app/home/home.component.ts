import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickMethod() {
    console.log('Grid 1');
    this.router.navigate(['empdata']);    
    
  }
  clickMet() {
    console.log('Grid 2');
    this.router.navigate(['payslip']);   
    
  }
  
  clickMethods() {
    console.log('Grid 3');
    this.router.navigate(['pdf']);   
    
  }

}

     
