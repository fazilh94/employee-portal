import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStoreService {
  employeeStore:Employee[]=[];

  constructor(private http:HttpClient) {
    this.employeeStore=[
      {
          "firstName": "fazil",
          "lastName": "hussain1",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain2",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain3",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain4",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain5",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain6",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      },
      {
          "firstName": "fazil",
          "lastName": "hussain7",
          "email": "faz97@gmail.com",
          "phone": "5145737175",
          "educationBlocks": [
              {
                  "school": "Concordia University",
                  "degree": "Masters",
                  "fieldOfStudy": "Electrical and Computer Engineering",
                  "startDate": "2021-01-12",
                  "endDate": "2022-08-24"
              }
          ],
          "experienceBlocks": [
              {
                  "title": "Tech Analyst",
                  "company": "Infosys",
                  "location": "Hyderabad",
                  "startDate": "2015-06-13",
                  "endDate": "2021-01-06",
                  "description": "Worked as an Angular Developer"
              }
          ]
      }
  ];
  }


  

 
  public employeeslice:Employee | undefined;
    addToStore(employee:Employee) {
      this.employeeStore.push(employee);
    }
  
    getEmployees():Employee[] {
      
      return this.employeeStore;
    }
  
    clearStore():Employee[] {
      this.employeeStore = [];
      return this.employeeStore;
    }

//     generateData(employee:Employee):Employee[]{
//       let generatedData=[employee];
//       let newlist=[];
//       for(let i=0;i<50;i++){
//       Object.keys(employee).forEach(function(key, index) {
//         employee.lastName = employee.lastName.concat(((Math.random()+1).toString(36).substring(2,5)));
//       generatedData.push(employee); 
//       });
//     }

// console.log(generatedData);
//       return generatedData;
//     }
}
