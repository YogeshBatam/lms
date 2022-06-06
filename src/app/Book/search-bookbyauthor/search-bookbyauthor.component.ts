import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';


@Component({
  selector: 'app-search-bookbyauthor',
  templateUrl: './search-bookbyauthor.component.html',
  styleUrls: ['./search-bookbyauthor.component.css']
})
export class SearchBookbyauthorComponent implements OnInit {
  service:BookserviceService;
  bookdto:Book=new Book(0,0,'','','','');
  bookArr:Book[]=[];
  isDataFetched:boolean = false;
  constructor(service:BookserviceService,private route:ActivatedRoute) { 
    this.service=service;
  }

  ngOnInit(): void {
  }

  doGetBookInfoByAuthor(bookAuthor : string)
  {
    console.log("author name is : - "+bookAuthor);
    let searchAuthorName:string =String(bookAuthor);
    this.service.doGetBookInfoByAuthor(searchAuthorName).subscribe(
      data=>{  // data contains information of book
        this.bookArr = data;
        this.isDataFetched = true;
        console.log('Data is fetched '+data+'  verify :- '+this.bookdto.bookName);
      },
      error=>{
        this.isDataFetched = false;
        console.log(error);
      }
    );
  }
}
