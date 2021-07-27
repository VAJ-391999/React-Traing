import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo:"/employeelist", pathMatch: 'full'
  },
  {
    path: 'employeelist', component: EmployeeListComponent
  },
  {
    path: 'employeedetails/:id', component: EmployeeDetailComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule = [EmployeeListComponent, EmployeeDetailComponent, PageNotFoundComponent]
