import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReturnBook } from '../returnbook';
import { ReturnbookService } from '../returnbook.service';

@Component({
  selector: 'app-returnbook-details',
  templateUrl: './returnbook-details.component.html',
  styleUrls: ['./returnbook-details.component.css']
})
export class ReturnbookDetailsComponent implements OnInit {

  returnId: number=0;
  returnbook: ReturnBook= new ReturnBook(0,0,0,0,'');
  constructor(private route: ActivatedRoute, private returnbookService: ReturnbookService
    ) { }

  ngOnInit(): void {
    this.returnId = this.route.snapshot.params['id'];

    this.returnbook;
    this.returnbookService.getReturnBookById(this.returnId).subscribe( data => {
      this.returnbook = data;
    });
  }


}
