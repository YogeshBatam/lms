import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './Home/home.component';
import { SearchbookbyidComponent } from './searchbookbyid/searchbookbyid.component';

const routes: Routes = [
  {path:'',redirectTo:'AdminLogin',pathMatch:'full'},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'AdminSignup',component:AdminSignupComponent},
  {path:'AdminHome',component:HomeComponent},
  {path:'getAllBooks',component:BooklistComponent},
  {path:'getBookById',component:SearchbookbyidComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
