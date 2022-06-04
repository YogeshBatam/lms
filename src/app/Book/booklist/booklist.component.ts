import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookArr:Book[]=[];
  constructor(private service:BookserviceService,private route:ActivatedRoute) { 
    this.service.getAllBooks().subscribe(
      data=>{
        this.bookArr = data;
        console.log(this.bookArr);
      },
      error=>{

      }
    );
  }

  ngOnInit(): void {
  }

}
