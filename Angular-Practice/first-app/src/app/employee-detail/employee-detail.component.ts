import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employee: any[] = []
  public errorMsg: any;
  public empId: number = 0;
  public previousId: any;
  public nextId: any;

  constructor( private _employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._employeeService.getEmployee()
    .subscribe((data: any) => this.employee = data,
                error => this.errorMsg = error)

    let id = this.route.snapshot.paramMap.get('id');
    this.empId = Number(id);
  }

  goPrevious() {
    this.previousId = this.empId - 1;
    this.router.navigate(['/employeedetails', this.previousId])
  }

  goNext() {
    this.nextId = this.empId + 1;
    this.router.navigate(['/employeedetails', this.nextId])
  }

}
