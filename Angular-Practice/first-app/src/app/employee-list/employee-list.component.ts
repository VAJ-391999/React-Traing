import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee: any[] = [];
  public errorMsg: any;

  constructor( private _employeeSevice: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this._employeeSevice.getEmployee()
    .subscribe((data: any) => this.employee = data,
                error => this.errorMsg = error)
  }

  onSelect(emp: any) {
    this.router.navigate(['/employeedetails', emp.id])
  }

}
