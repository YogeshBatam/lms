import { Component, OnInit } from '@angular/core';
import { Issuebook } from '../issuebook';
import { IssuebookService } from '../issuebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issuebook-list',
  templateUrl: './issuebook-list.component.html',
  styleUrls: ['./issuebook-list.component.css']
})
export class IssuebookListComponent implements OnInit {

  issuebooks: Issuebook[] = [];

  constructor(private issuebookService: IssuebookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getIssuebooks();
  }

  private getIssuebooks(){
    this.issuebookService.getIssuebooksList().subscribe(data => {
      this.issuebooks = data;
    });
  }

  issuebookDetails(issueId: number){
    this.router.navigate(['issuebook-details', issueId]);
  }

  updateIssuebook(issueId: number){
    this.router.navigate(['update-issuebook', issueId]);
  }

  deleteIssuebook(issueId: number){
    this.issuebookService.deleteIssuebook(issueId).subscribe( data => {
      console.log(data);
      this.getIssuebooks();
    })
  }

}


