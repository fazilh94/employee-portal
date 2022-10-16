import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Portal';
constructor(private route:Router){

}
  checkstate():boolean{
    if(this.route.url==='/employeeportfolio'){
      return true;
    }else{
      return false;
    }
  }
}
