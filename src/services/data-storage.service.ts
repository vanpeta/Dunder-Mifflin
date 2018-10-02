import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) { }
  user: User;
  posts: Post[];

  storeUser(user: User) {
    this.user = user;
  }

  fetchPosts(userId: number) {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(postsUrl).pipe(
      map(data => {
        return this.processPostsResponse(data, userId);
      })
    );
  }

  processPostsResponse(data, id) {
    this.posts = data.filter(post => post.userId === id);
    return this.posts;
  }

}
