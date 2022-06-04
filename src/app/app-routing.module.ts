import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './Admin/admin-signup/admin-signup.component';

import { BooklistComponent } from './Book/booklist/booklist.component'; 
import { ForgetPasswordComponent } from './Student/forget-password/forget-password.component';
import { GetstudentComponent } from './Student/getstudent/getstudent.component';
import { HomeComponent } from './Admin/Home/home.component';
import { CreateIssuebookComponent } from './IssueBook/create-issuebook/create-issuebook.component';
import { IssuebookDetailsComponent } from './IssueBook/issuebook-details/issuebook-details.component';
import { IssuebookListComponent } from './IssueBook/issuebook-list/issuebook-list.component';
import { UpdateIssuebookComponent } from './IssueBook/update-issuebook/update-issuebook.component';
import { SearchbookbyidComponent } from './Book/searchbookbyid/searchbookbyid.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { StudentListComponent } from './Student/student-list/student-list.component'; 
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { StudentSignupComponent } from './Student/student-signup/student-signup.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component'; 
import { FineListComponent } from './Fine/fine-list/fine-list.component';
import { CreateFineComponent } from './Fine/create-fine/create-fine.component';
import { UpdateFineComponent } from './Fine/update-fine/update-fine.component';
import { FineDetalisComponent } from './Fine/fine-detalis/fine-detalis.component';
import { FineHomeComponent } from './Fine/fine-home/fine-home.component';
import { ReturnbookListComponent } from './ReturnBook/returnbook-list/returnbook-list.component';
import { ReturnbookCreateComponent } from './ReturnBook/returnbook-create/returnbook-create.component';
import { ReturnbookUpdateComponent } from './ReturnBook/returnbook-update/returnbook-update.component';
import { ReturnbookDetailsComponent } from './ReturnBook/returnbook-details/returnbook-details.component';
import { ReturnbookhomeComponent } from './ReturnBook/returnbookhome/returnbookhome.component';


const routes: Routes = [
  {path:'',redirectTo:'AdminLogin',pathMatch:'full'},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'AdminSignup',component:AdminSignupComponent},
  {path:'AdminHome',component:HomeComponent},
  {path:'getAllBooks',component:BooklistComponent},
  {path:'getBookById',component:SearchbookbyidComponent},

  // {path:'',redirectTo:'StudentLogin',pathMatch:'full'},
  {path:'StudentLogin',component:StudentLoginComponent},
  {path:'StudentSignup',component:StudentSignupComponent},
  {path:'student-home', component:StudentHomeComponent},
  {path:'GetStudent',component:GetstudentComponent},
  {path:'StudentList',component:StudentListComponent},
  {path:'Update-student',component:UpdateStudentComponent},
  {path:'Forget-password',component:ForgetPasswordComponent},

  {path: 'IssueBook', component: IssuebookListComponent},
  {path: 'IssueBook/IssueBook/create', component: CreateIssuebookComponent},
  {path: '', redirectTo:`IssueBook/IssueBook/getAll`,pathMatch:'full'},
  {path: 'update-issuebook/:issueId', component: UpdateIssuebookComponent},
  {path: 'issuebook-details/:issueId', component: IssuebookDetailsComponent},

  {path: 'Fine', component:FineListComponent},
  {path: 'Fine/Fine/create', component: CreateFineComponent},
  {path: '', redirectTo:`Fine/Fine/getAll`,pathMatch:'full'},
  {path:'update-fine/:id', component: UpdateFineComponent},
  {path: 'fine-details/:id', component: FineDetalisComponent},
  {path:'finehome',component:FineHomeComponent},
  
  {path: `ReturnBook`, component: ReturnbookListComponent},
  {path: `ReturnBook/ReturnBook/create`, component: ReturnbookCreateComponent},
  {path: '', redirectTo:`ReturnBook/ReturnBook/getall`,pathMatch:'full'},

  {path: 'returnBook/updateBook', component: ReturnbookUpdateComponent},
  {path: 'returnBook/allreturnbook', component: ReturnbookDetailsComponent},
  {path:'returnbookhome',component:ReturnbookhomeComponent}


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
