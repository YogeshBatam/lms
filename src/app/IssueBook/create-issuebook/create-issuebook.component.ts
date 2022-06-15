import { Component, OnInit } from '@angular/core';
import { Issuebook } from '../issuebook';
import { IssuebookService } from '../issuebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-issuebook',
  templateUrl: './create-issuebook.component.html',
  styleUrls: ['./create-issuebook.component.css']
})
export class CreateIssuebookComponent implements OnInit {
  issuebookService : IssuebookService;

  todaydate=new Date();

  issuebook: Issuebook = new Issuebook(0,0,0,'','','',0);
  constructor(private issuebookServices: IssuebookService,
    private router: Router) { 
      this.issuebookService=issuebookServices;
    }

  ngOnInit(): void {
  }

  saveIssuebook(){
    this.issuebookService.createIssuebook(this.issuebook).subscribe( data =>{
      console.log(data);
      this.goToIssuebookList();
    },
    error => console.log(error));
  }

  goToIssuebookList(){
    this.router.navigate(['/IssueBook']);
  }

  onSubmit(){
    console.log(this.issuebook);
    this.saveIssuebook();
  
  }
}
