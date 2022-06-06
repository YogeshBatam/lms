import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnBook } from '../returnbook';
import { ReturnbookService } from '../returnbook.service';

@Component({
  selector: 'app-returnbook-create',
  templateUrl: './returnbook-create.component.html',
  styleUrls: ['./returnbook-create.component.css']
})
export class ReturnbookCreateComponent implements OnInit {

  returnbook: ReturnBook = new ReturnBook(0,0,0,0,'');

  constructor(private returnbooksService: ReturnbookService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveReturnBook(){
    this.returnbooksService.createReturnBook(this.returnbook).subscribe( data =>{
      console.log(data);
      this.goToReturnBookList();
    },
    error => console.log(error));
  }

  goToReturnBookList(){
    this.router.navigate(['/ReturnBook']);
  }
  
  onSubmit(){
    console.log(this.returnbook);
    this.saveReturnBook();
  }
}

