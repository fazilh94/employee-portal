import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { EmployeeStoreService } from '../employee-store.service';

@Component({
  selector: 'btn-cell-renderer',
  standalone:true,
  imports:[CommonModule],
  template: `
    <button type="button" class="btn btn-primary btn-xs" (click)="btnClickedHandler($event)"> View Profile</button>
  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  constructor(private route:Router, private store:EmployeeStoreService){

  }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    console.log(this.params.value);
    this.store.employeeslice=undefined;
    this.params.clicked(this.params.value);
    this.store.employeeslice=this.params.value;
    this.route.navigate(['employeeportfolio']);
  }

  refresh() {
    return false;
  }
}
