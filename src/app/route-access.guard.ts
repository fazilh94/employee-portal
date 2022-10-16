import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeStoreService } from './employee-store.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAccessGuard implements CanActivate {

  constructor(private store:EmployeeStoreService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.store.employeeslice){
        return true;
      }
      else{
        this.route.navigate(['employeedetails']);
        return false;
      }
    
  }
  
}
