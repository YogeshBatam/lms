import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admin:Admin=new Admin(0,'','');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['AdminLogin']);
  }
}
