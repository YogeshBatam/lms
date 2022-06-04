import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {


  constructor(private http:HttpClient) { }

    baseEndPoint:string = 'http://localhost:8080/Books';
    allBooksEndPoint = this.baseEndPoint+'/viewAllBook';
    bookInfoEndPoint=this.baseEndPoint+'/viewById/'
    bookByNameInfoEndPoint=this.baseEndPoint+'/viewByBookName/'
    getAllBooks():Observable<Book[]>
    {
      console.log('End point to hit '+this.allBooksEndPoint);
      return this.http.get<Book[]>(`${this.allBooksEndPoint}`);
    }

    getBookInfo(bookId:number):Observable<Book>
  {
    let endPoint = this.bookInfoEndPoint+''+bookId;
    console.log('End point to hit '+endPoint);

    return this.http.get<Book>(`${endPoint}`);
  }
 
}
