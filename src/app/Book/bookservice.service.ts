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
    bookInfoEndPoint=this.baseEndPoint+'/viewById/';
    bookByNameInfoEndPoint=this.baseEndPoint+'/viewByBookName/';
    bookByAuthorInfoEndPoint=this.baseEndPoint+'/viewByAuthorName/';
    bookByPublisherInfoEndPoint=this.baseEndPoint+'/viewByPublisherName/';


    createBookEndPoint=this.baseEndPoint+'/create';
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

  createBook(book: Book): Observable<Object>{
    return this.http.post(`${this.createBookEndPoint}`, book);
  }
  doGetBookInfoByPublisher(bookPublisher:string):Observable<Book[]>{
    let endPoint = this.bookByPublisherInfoEndPoint+''+bookPublisher;
    console.log('End point to hit '+endPoint);

    return this.http.get<Book[]>(`${endPoint}`);
  }
  doGetBookInfoByName(bookName:string):Observable<Book[]>{
    let endPoint = this.bookByNameInfoEndPoint+''+bookName;
    console.log('End point to hit '+endPoint);

    return this.http.get<Book[]>(`${endPoint}`);

  }
  doGetBookInfoByAuthor(bookAuthor:string):Observable<Book[]>{
    let endPoint = this.bookByAuthorInfoEndPoint+''+bookAuthor;
    console.log('End point to hit '+endPoint);

    return this.http.get<Book[]>(`${endPoint}`);
  }
  
 
}
