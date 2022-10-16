import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EmployeeStoreService } from '../employee-store.service';

@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-employee-portfolio',
  templateUrl: './employee-portfolio.component.html',
  styleUrls: ['./employee-portfolio.component.scss']
})
export class EmployeePortfolioComponent implements OnInit {
  selectedEmployee:any;
  constructor(private route:ActivatedRoute, private store:EmployeeStoreService) { }

  ngOnInit(): void {

    this.selectedEmployee=this.store.employeeslice;
    // this.route.queryParams.subscribe((data)=>this.selectedEmployee=data);
    console.log(this.selectedEmployee.experienceBlocks)
  }

}
