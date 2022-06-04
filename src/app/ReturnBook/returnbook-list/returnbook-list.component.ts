import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnBook } from '../returnbook';

import { ReturnbookService } from '../returnbook.service';

@Component({
  selector: 'app-returnbook-list',
  templateUrl: './returnbook-list.component.html',
  styleUrls: ['./returnbook-list.component.css']
})
export class ReturnbookListComponent implements OnInit {
  returnbooks: ReturnBook[]   | undefined;    

  constructor(private returnbooksServices: ReturnbookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReturnBook();
  }
  private getReturnBook(){
    this.returnbooksServices.getReturnBookList().subscribe(data => {
      this.returnbooks = data;
    });
  }

  returnbookDetails(returnId: number){
    this.router.navigate(['returnbook-details', returnId]);
  }

  updatereturnbook(returnId: number){
    this.router.navigate(['update-returnbook', returnId]);
  }

  deleteReturnBook(returnId: number){
    this.returnbooksServices.deleteReturnBook(returnId).subscribe( data => {
      console.log(data);
      this.getReturnBook();
    })
  }
}


