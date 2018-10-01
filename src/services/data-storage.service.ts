import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) { }
  user: User;

  storeUser(user: User) {
    this.user = user;
  }

}
