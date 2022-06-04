import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Fine } from './fine';

@Injectable({
  providedIn: 'root'
})
export class FineService {
  

constructor(private httpClient:HttpClient){ }



private baseURL:string='http://localhost:8080/fine';
createfine: string =this.baseURL+'/createFine';
finelist: string = this.baseURL+'/Allfine';
updatefine: string = this.baseURL+'/upadatefine';
deletefine: string = this.baseURL+'/fine/{fineid}';

getFineList(): Observable<Fine[]>{
  return this.httpClient.get<Fine[]>(`${this.finelist}`);
}
 
createFine(Fine: Fine): Observable<Object>{
  return this.httpClient.post(`${this.createfine}`, Fine);

}
getFineById(id:number): Observable<Fine>{
  return this.httpClient.get<Fine>( `${this.baseURL}/${id}`);
}
updateFine(id: number, Fine:Fine): Observable<Object>{
  return this.httpClient.put(`${this.updatefine}/${id}`, Fine);
}
deleteFine(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.deletefine}/${Fine}`);
}



 

  }

