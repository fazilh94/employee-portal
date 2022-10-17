import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeFormComponent } from './emplyee-form/employee-form.component';
import { RouteAccessGuard } from './route-access.guard';

const routes: Routes = [
  {
    path:'employeeform',
    component:EmployeeFormComponent,
    title: 'Employee Portal - Onboarding'
  },
  {
    path:'employeedetails', loadComponent:()=> import('./employee-details/employee-details.component')
    .then(mod=>mod.EmployeeDetailsComponent),
    title: 'Employee Portal - List'
  },
  {
    path:'employeeportfolio', loadComponent:()=> import('./employee-portfolio/employee-portfolio.component')
    .then(mod=>mod.EmployeePortfolioComponent), canActivate:[RouteAccessGuard],
    title: 'Employee Portal - Portfolio'
  },
  {
    path:'', redirectTo:'/employeeform', pathMatch:"full"
  },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
