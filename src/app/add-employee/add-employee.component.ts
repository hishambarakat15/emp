import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
departments: string[] = ['FrontEnd Developer','BackEnd Developer','java Developer','IOS Developer','It'];
employess: any[] = [];
filterEmp: any[] = [];

  constructor(private router: Router) {
    // Get data From LocalStorage
      let storedNames = localStorage.getItem('employee');
      if (storedNames){
          this.employess = JSON.parse(storedNames);
      }
  }

  ngOnInit(): void {
  }

  // on Add Click Function
    AddNewEmp(add: any) {
    this.employess.push(add.value);
    console.log(this.employess);
    // Add data To LocalStorage
    localStorage.setItem('employee',JSON.stringify(this.employess));
        alert("Added successfully ");
        add.reset();
  }
  // on Search Click Function
    searchClick(search: any) {
        this.filterEmp  = [];
        for(let emp of this.employess){
          if(emp.dep === search.depS && emp.empName === search.empNameS ){
              this.filterEmp.push(emp);
          }
      }



    }
}
