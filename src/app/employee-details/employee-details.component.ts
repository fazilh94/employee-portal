import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';
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
  private gridApi!: GridApi;
  rowData: Employee | any=[];
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';
  defaultColDef = {
    sortable: true,
    filter:true
  };

  constructor(private store:EmployeeStoreService, private route:Router) { }


  onGridReady(params:any) {
    this.rowData=this.store.getEmployees();
    params.api.sizeColumnsToFit();
    this.gridApi = params.api ;
    this.gridApi.setDomLayout('autoHeight');
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
