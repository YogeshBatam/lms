import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[]=[];
  
  constructor(private studentService:StudentServiceService) { }

  ngOnInit(): void {
    this.getAllStudents();

  }
  private getAllStudents(){
    this.studentService.getStudentList().subscribe(
      data=>{ this.students=data;})
     
    }

    deleteStudent(studentId:number){
     this.studentService.deleteStudent(studentId).subscribe(data =>{
       console.log(data);
      this.getAllStudents();
     })
    }
  }


