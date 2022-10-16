import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { Employee } from '../employee';
import { EmployeeStoreService } from '../employee-store.service';
import { BtnCellRenderer } from './button-cell-renderer.component';

@Component({
  selector: 'app-employee-details',
  standalone:true,
  imports:[CommonModule,AgGridModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  rowData: Employee | any=[];
  defaultColDef = {
    sortable: true,
    filter:true
  };

  constructor(private store:EmployeeStoreService, private route:Router) { }


  onGridReady(params:any) {
    this.rowData=this.store.getEmployees();
  }

  columnDefs = [
    {headerName: 'First Name', field: 'firstName'},
    {headerName: 'Last Name', field: 'lastName'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Phone', field: 'phone'},
    {
      field: 'Profile',
      cellRenderer: BtnCellRenderer,
      valueGetter:(props:any)=>props.data,
      cellRendererParams: {
        clicked: function (propsData: Employee) {
          console.log(propsData);
          
        },
      },
      minWidth: 150,
    }

];



}
