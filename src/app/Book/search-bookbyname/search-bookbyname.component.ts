import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';



@Component({
  selector: 'app-search-bookbyname',
  templateUrl: './search-bookbyname.component.html',
  styleUrls: ['./search-bookbyname.component.css']
})
export class SearchBookbynameComponent implements OnInit {
  service:BookserviceService;
  bookdto:Book=new Book(0,0,'','','','');
  bookArr:Book[]=[];
  isDataFetched:boolean = false;

  constructor(service:BookserviceService,private route:ActivatedRoute) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  doGetBookInfoByName(bookName : string)
  {
    console.log("book name is : - "+bookName);
    let searchBookName:string =String(bookName);
    this.service.doGetBookInfoByName(searchBookName).subscribe(
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
