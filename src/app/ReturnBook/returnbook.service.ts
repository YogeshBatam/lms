import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ReturnBook } from './returnbook';


@Injectable({
  providedIn: 'root'
})
export class ReturnbookService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:8080/librarian';
  
  createreturnbook: string =this.baseURL+'/createReturnBook';
  returnbooklist: string = this.baseURL+'/viewAllReturnBook';
  updatereturnbook: string = this.baseURL+'/updateBook';

  getReturnBookList(): Observable<ReturnBook[]>{
    return this.httpClient.get<ReturnBook[]>(`${this.returnbooklist}`);
  }

  createReturnBook(returnbook: ReturnBook): Observable<Object>{
    return this.httpClient.post(`${this.createreturnbook}`, returnbook);
  }

  getReturnBookById(returnId: number): Observable<ReturnBook>{
    return this.httpClient.get<ReturnBook>(`${this.baseURL}/${returnId}`);
  }

  updateReturnBook(returnId: number, returnbook: ReturnBook): Observable<Object>{
    return this.httpClient.put(`${this.updatereturnbook}/${returnId}`, returnbook);
  }

  deleteReturnBook(returnId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${returnId}`);
  }
}

