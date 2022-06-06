import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book:Book=new Book(0,0,'','','','Available');
  bookservice:BookserviceService;
  constructor(bookserve:BookserviceService) { 
    this.bookservice=bookserve;
  }

  ngOnInit(): void {
  }
  create(){
    this.bookservice.createBook(this.book).subscribe(
      (data) => { 
          console.log(data);
          alert('success');
      },
      (error) => {
        console.log(error);
          alert('something went wrong');
      }
    );

}
}
