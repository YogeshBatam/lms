import { Component, OnInit } from '@angular/core';
import { Issuebook } from '../issuebook';
import { ActivatedRoute } from '@angular/router';
import { IssuebookService } from '../issuebook.service';

@Component({
  selector: 'app-issuebook-details',
  templateUrl: './issuebook-details.component.html',
  styleUrls: ['./issuebook-details.component.css']
})
export class IssuebookDetailsComponent implements OnInit {

  issueId: number = 0;
  issuebook: Issuebook = new Issuebook(0,0,0,'','','',0);
  constructor(private route: ActivatedRoute, private issuebookService: IssuebookService) { }

  ngOnInit(): void {
    this.issueId = this.route.snapshot.params['issueId'];

   
    this.issuebookService.getIssuebookById(this.issueId).subscribe( data => {
      this.issuebook = data;
    });
  }

}
