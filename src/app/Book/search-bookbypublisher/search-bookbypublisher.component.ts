import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-search-bookbypublisher',
  templateUrl: './search-bookbypublisher.component.html',
  styleUrls: ['./search-bookbypublisher.component.css']
})
export class SearchBookbypublisherComponent implements OnInit {
  service:BookserviceService;
  bookdto:Book=new Book(0,0,'','','','');
  bookArr:Book[]=[];
  isDataFetched:boolean = false;
  constructor(service:BookserviceService,private route:ActivatedRoute) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  doGetBookInfoByPublisher(bookPublisher : string)
  {
    console.log("publisher name is : - "+bookPublisher);
    let searchPublisherName:string =String(bookPublisher);
    this.service.doGetBookInfoByPublisher(searchPublisherName).subscribe(
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
