import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AdminServiceService } from '../admin-service.service';
import { LoginAdmin } from '../login-admin';
import { Loginadminresponse } from '../loginadminresponse';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginModel:LoginAdmin={
  librarianUsername:'',
  librarianPassword:''
  }
  

  @Output() loginAcknowlegment= new EventEmitter<Loginadminresponse>();
  
  
  
  responseStatus:Loginadminresponse=<Loginadminresponse>{}

  constructor(private adminService:AdminServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  doLogin()
  {
    console.log('inside do login '+this.loginModel);
    console.log(this.loginModel.librarianUsername+' - '+this.loginModel.librarianPassword)

    this.adminService.doLoginAction(this.loginModel).subscribe(
      (data) => { 
        console.log(data);
        alert('success');
        this.router.navigate(['AdminHome']);
    },
    (error) => {
      console.log(error);
        alert('something went wrong');
    }
    );
  }
}


