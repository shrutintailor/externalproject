import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //readonly APIUrl ="http://localhost:5000/api";
  readonly APIUrl="https://localhost:5001/api/Post";
  constructor(private http:HttpClient) { }
  loginid(val:any)
  {
    return this.http.post<any>(this.APIUrl+'/log',val);
  }
}
