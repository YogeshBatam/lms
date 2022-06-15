import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  adminModel:Admin = new Admin(0,'','');
  adminService:AdminServiceService;

  

  constructor(adminService:AdminServiceService) {
    this.adminService = adminService;
   }

  ngOnInit(): void {
  }
  register(){
    this.adminService.addAdmin(this.adminModel).subscribe(
      (data) => { 
          console.log(data);
          alert('success');
      },
      (error) => {
        console.log(error);
          alert('something went wrong');
      }
    );
  }
 
 

}
