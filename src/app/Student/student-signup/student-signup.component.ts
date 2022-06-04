import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  studentModel:Student = new Student(0,'','',0,'','','');
  studentService:StudentServiceService;

  constructor(studentService:StudentServiceService) {
    this.studentService=studentService;
   }

  ngOnInit(): void {
  }

  register(){
    this.studentService.addStudent(this.studentModel).subscribe(
      (data: any) => { 
          console.log(data);
          alert('success');
      },
      (error: any) => {
        console.log(error);
          alert('something went wrong');
      }
    );
  }
}
