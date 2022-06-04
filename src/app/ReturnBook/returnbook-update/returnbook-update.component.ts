import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnBook } from '../returnbook';
import { ReturnbookService } from '../returnbook.service';

@Component({
  selector: 'app-returnbook-update',
  templateUrl: './returnbook-update.component.html',
  styleUrls: ['./returnbook-update.component.css']
})
export class ReturnbookUpdateComponent implements OnInit {

  returnId: number=0;
  returnbook: ReturnBook = new ReturnBook(0,0,0,0,'');
  constructor(private returnbooksService: ReturnbookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.returnId = this.route.snapshot.params['returnId'];

    this.returnbooksService.getReturnBookById(this.returnId).subscribe(data => {
      this.returnbook = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.returnbooksService.updateReturnBook(this.returnId, this.returnbook).subscribe( data =>{
      this.goToReturnBookList();
    }
    , error => console.log(error));
  }

  goToReturnBookList(){
    this.router.navigate(['/returnBook']);
  }
}
