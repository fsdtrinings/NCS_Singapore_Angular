import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({   // @Autowire
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = "http://localhost:8081/empconsole/hr";
  
  uri_allEmployees:string = this.baseURL+"/employees";

  constructor(private http:HttpClient) { }

  // contains all use case operations

  getEmployee():Observable<Employee[]>
  {
    console.log("Inside Service layer hit getEmployee url ");
     return this.http.get<Employee[]>(`${this.uri_allEmployees}`);
  }

}//end class
