import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService) {
    this.getAllEmployeesFromServer();
   }

  ngOnInit(): void {
  }

  getAllEmployeesFromServer()
  {
      this.employeeService.getEmployee().subscribe(data=>{
        console.log("inside data "+data);
        this.employees = data;
        
      },err=>{
        console.log("Error in get All Employees :- "+err);
      });
  }


}
