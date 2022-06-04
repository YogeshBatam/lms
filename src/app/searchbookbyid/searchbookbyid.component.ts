import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-searchbookbyid',
  templateUrl: './searchbookbyid.component.html',
  styleUrls: ['./searchbookbyid.component.css']
})
export class SearchbookbyidComponent implements OnInit {

  service:BookserviceService;
  bookdto:Book=new Book(0,0,'','','','');
  bookArr:Book[]=[];
  isDataFetched:boolean = false;

  constructor(service:BookserviceService,private route:ActivatedRoute) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  doGetBookInfo(bookId : string)
  {
    console.log("book id is : - "+bookId);
    let searchBookId:number =parseInt(bookId);
    this.service.getBookInfo(searchBookId).subscribe(
      data=>{  // data contains information of account
        this.bookdto = data;
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
