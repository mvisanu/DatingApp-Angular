import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  //Http Client get method
public getUsers(): Observable<any> {
  const url = 'https://localhost:5002/api/Users';
  return this.http.get<any>(url);
}
}