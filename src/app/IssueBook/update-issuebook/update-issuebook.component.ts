import { Component, OnInit } from '@angular/core';
import { IssuebookService } from '../issuebook.service';
import { Issuebook } from '../issuebook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-issuebook',
  templateUrl: './update-issuebook.component.html',
  styleUrls: ['./update-issuebook.component.css']
})
export class UpdateIssuebookComponent implements OnInit {

  issueId: number=0;
  issuebook: Issuebook = new Issuebook(0,0,0,'','','',0);
  constructor(private issuebookService: IssuebookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.issueId = this.route.snapshot.params['issueId'];

    this.issuebookService.getIssuebookById(this.issueId).subscribe( data => {
      this.issuebook = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.issuebookService.updateIssuebook(this.issueId, this.issuebook).subscribe(data =>{
      this.goToIssuebookList();
    },
    error => console.log(error));
  }

  goToIssuebookList(){
    this.router.navigate(['/issuebooks']);
  }
}
