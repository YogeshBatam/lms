import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book/book';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-getstudent',
  templateUrl: './getstudent.component.html',
  styleUrls: ['./getstudent.component.css']
})
export class GetstudentComponent implements OnInit {
  service:StudentServiceService;
  student:Student = new Student(0,'','',0,'','','',[]);
  isDataFetched:boolean = false;

  

  constructor(service:StudentServiceService) { 
    this.service=service;
  }

  ngOnInit(): void {
  }
  getStudentId(studentId: string)
  {
    console.log("student id is : - "+studentId);
    let searchStudentId:number = parseInt(studentId);
    this.service.getStudentId(searchStudentId).subscribe(
      data=>{  // data contains information of student
        this.student = data;
        this.isDataFetched = true;
        console.log('Data is fetched '+data+'  verify :- '+this.student.firstName+this.student.lastName);
      },
      error=>{
        this.isDataFetched = false;
        console.log(error);
      }
    );
  }
  

}
