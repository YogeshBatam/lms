import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginStudent } from './login-student';
import { Loginstudentresponse } from './loginstudentresponse';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  rootEndPoint:string='http://localhost:8080/student/';
  loginEndPoint:string = this.rootEndPoint+'/login';
  createStudentEndPoint:string = this.rootEndPoint+'createStudent/';
  getStudentEndPoint:string=this.rootEndPoint+'viewStudentById/';
  studentListEndPoint:string=this.rootEndPoint+'allStudent/';
  updateStudentEndPoint:string=this.rootEndPoint+'updateStudent/';
  deleteStudentEndPoint:string=this.rootEndPoint+'deleteStudent/'

  constructor(private http:HttpClient) { }

  addStudent(student:Student):Observable<Object>
  {
    console.log('Student Service - Create Student called ');
    return this.http.post<Student>(`${this.createStudentEndPoint}`,student);
  }

  doLoginAction(loginDetails:LoginStudent):Observable<Loginstudentresponse>
  {
    return this.http.post<Loginstudentresponse>(`${this.loginEndPoint}`,loginDetails);
  }

  getStudentId(studentId:number):Observable<Student>
  {
    let endPoint = this.getStudentEndPoint+''+studentId;
    console.log('End point to hit '+endPoint);

    return this.http.get<Student>(`${endPoint}`);
  }


  

  getStudentList():Observable<any>{
    return this.http.get<any>(`${this.studentListEndPoint}`)
  }

  updateStudent(student:Student):Observable<Object>
  {
    console.log('Student Service - Update Student called ');
    return this.http.put<Student>(`${this.updateStudentEndPoint}`,student);
  }

  deleteStudent(studentId: number): Observable<Object>{
    return this.http.delete(`${this.deleteStudentEndPoint}/${studentId}`);
  }
}
