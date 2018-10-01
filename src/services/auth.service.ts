import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  loggedIn = false;

  authenticate(email: string) {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(usersUrl).pipe(
      map(data => {
        return this.processResponse(data, email);
      })
    );
  }

  processResponse(data: any, email: string) {
    const result = data.filter(user => user.email === email);
    if (result.length === 0) {
      return false;
    } else {
      this.loggedIn = true;
      return result;
    }
  }
}
