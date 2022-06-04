import { Component,EventEmitter, OnInit , Output} from '@angular/core';
import { Router } from '@angular/router';
import { LoginStudent } from '../login-student';
import { Loginstudentresponse } from '../loginstudentresponse';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginModel:LoginStudent={
    userName:'',
    password:''
    }
    
  
    @Output() loginAcknowlegment= new EventEmitter<Loginstudentresponse>();
    
    
    
    responseStatus:Loginstudentresponse=<Loginstudentresponse>{}
  
    

  constructor(private studentService:StudentServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin()
  {
    console.log('inside do login '+this.loginModel);
    console.log(this.loginModel.userName+' - '+this.loginModel.password)

    this.studentService.doLoginAction(this.loginModel).subscribe(
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
