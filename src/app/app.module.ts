import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Admin/Home/home.component'; 
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './Admin/admin-signup/admin-signup.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './Book/booklist/booklist.component'; 
import { SearchbookbyidComponent } from './Book/searchbookbyid/searchbookbyid.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';

import { GetstudentComponent } from './Student/getstudent/getstudent.component';

import { ForgetPasswordComponent } from './Student/forget-password/forget-password.component';
import { UpdateIssuebookComponent } from './IssueBook/update-issuebook/update-issuebook.component';
import { IssuebookListComponent } from './IssueBook/issuebook-list/issuebook-list.component';
import { CreateIssuebookComponent } from './IssueBook/create-issuebook/create-issuebook.component';
import { IssuebookDetailsComponent } from './IssueBook/issuebook-details/issuebook-details.component';
import { IssueBookDashBoardComponent } from './IssueBook/issue-book-dash-board/issue-book-dash-board.component';
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { StudentSignupComponent } from './Student/student-signup/student-signup.component';
import { StudentListComponent } from './Student/student-list/student-list.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { FineListComponent } from './Fine/fine-list/fine-list.component';
import { CreateFineComponent } from './Fine/create-fine/create-fine.component';
import { FineHomeComponent } from './Fine/fine-home/fine-home.component';
import { UpdateFineComponent } from './Fine/update-fine/update-fine.component';
import { FineDetalisComponent } from './Fine/fine-detalis/fine-detalis.component';
import { ReturnbookCreateComponent } from './ReturnBook/returnbook-create/returnbook-create.component';
import { ReturnbookListComponent } from './ReturnBook/returnbook-list/returnbook-list.component';
import { ReturnbookUpdateComponent } from './ReturnBook/returnbook-update/returnbook-update.component';
import { ReturnbookDetailsComponent } from './ReturnBook/returnbook-details/returnbook-details.component';
import { ReturnbookhomeComponent } from './ReturnBook/returnbookhome/returnbookhome.component';
import { StudentPageComponent } from './Student/student-page/student-page.component';
import { CreateBookComponent } from './Book/create-book/create-book.component';
import { SearchBookbyauthorComponent } from './Book/search-bookbyauthor/search-bookbyauthor.component';
import { SearchBookbynameComponent } from './Book/search-bookbyname/search-bookbyname.component';
import { SearchBookbypublisherComponent } from './Book/search-bookbypublisher/search-bookbypublisher.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    BooklistComponent,
    SearchbookbyidComponent,

    StudentHomeComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    GetstudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    ForgetPasswordComponent,

    CreateIssuebookComponent,
    IssuebookDetailsComponent,
    IssuebookListComponent,
    UpdateIssuebookComponent,
    IssueBookDashBoardComponent,

    FineListComponent,
    CreateFineComponent,
    FineHomeComponent,
    UpdateFineComponent,
    FineDetalisComponent,

    ReturnbookCreateComponent,
    ReturnbookListComponent,
    ReturnbookUpdateComponent,
    ReturnbookDetailsComponent,
    ReturnbookhomeComponent,
    StudentPageComponent,

    CreateBookComponent,
    SearchBookbyauthorComponent,
    SearchBookbynameComponent,
    SearchBookbypublisherComponent
  

    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
