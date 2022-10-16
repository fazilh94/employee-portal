import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeStoreService } from '../employee-store.service';
@Component({
  selector: 'app-employee-form',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store:EmployeeStoreService, private route:Router) {}

  ngOnInit(): void {
    
  }

  employeeBuilderForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: '',
    educationBlocks: this.formBuilder.array([this.buildEducationBlock()]),
    experienceBlocks: this.formBuilder.array([this.buildExperienceBlock()])
  });

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  buildEducationBlock():FormGroup{
    return this.formBuilder.group({
      school:['',[Validators.required]],
      degree:['',[Validators.required]],
      fieldOfStudy:['',[Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })
  }

  get firstName() {
    return this.employeeBuilderForm.get('firstName')!;
  }
  get lastName() {
    return this.employeeBuilderForm.get('lastName')!;
  }
  get email() {
    return this.employeeBuilderForm.get('email')!;
  }
  get phone() {
    return this.employeeBuilderForm.get('phone')!;
  }
  save() {
    console.log(this.employeeBuilderForm);
    console.log('Saved: ' + JSON.stringify(this.employeeBuilderForm.value));
    this.store.addToStore(<Employee>this.employeeBuilderForm.value);
    this.route.navigate(['employeedetails']);

  }

  get experienceBlocks(): FormArray {
    return this.employeeBuilderForm.get('experienceBlocks') as FormArray;
  }

  get educationBlocks():FormArray{
    return this.employeeBuilderForm.get('educationBlocks') as FormArray;
  }
  addExperience() {
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }

  addEducation(){
    this.educationBlocks.insert(0,this.buildEducationBlock());
  }

}
