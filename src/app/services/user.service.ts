import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  RegisterUser(user: User)
  {
    return this.http.post<User>('https://localhost:7102/Signup', user).subscribe(data => {
      console.log(data);
    });
  }
}
