import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student:Student = new Student(0,'','',0,'','','',[]);
  studentService!: StudentServiceService;

  constructor(studentService:StudentServiceService,private router:Router) {
    this.studentService=studentService;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.studentService.updateStudent(this.student).subscribe(
      (data) => { 
        console.log(data);
        alert('success');
        this.router.navigate(['student-home']);
    },
    (error) => {
      console.log(error);
        alert('something went wrong');
    }
    );
  }

}



