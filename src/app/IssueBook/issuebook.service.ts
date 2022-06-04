import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issuebook } from './issuebook';

@Injectable({
  providedIn: 'root'
})
export class IssuebookService {

  
  private baseURL = "http://localhost:8080/issuebook/";
  createissuebook:string = this.baseURL+'createIssueBook';
  viewAllissuebooks:string = this.baseURL+'viewAllIssueBook';
  viewissuebook:string = this.baseURL+'viewById';
  deleteissuebook:string = this.baseURL+'deleteIssueBook';
  // updateissuebook:string = this.baseURL+'updateIssueBook';
  constructor(private httpClient : HttpClient) { }

  getIssuebooksList(): Observable<Issuebook[]>{
    return this.httpClient.get<Issuebook[]>(`${this.viewAllissuebooks}`);
  }

  createIssuebook(issuebook: Issuebook): Observable<Object>{
    return this.httpClient.post(`${this.createissuebook}`, issuebook);
  }

  getIssuebookById(issueId: number): Observable<Issuebook>{
    return this.httpClient.get<Issuebook>(`${this.viewissuebook}/${issueId}`);
  }

  updateIssuebook(issueId: number, issuebook: Issuebook): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${issueId}`, issuebook);
  }

  deleteIssuebook(issueId: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteissuebook}/${issueId}`);
  }

}
