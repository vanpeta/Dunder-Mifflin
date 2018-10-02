// angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// models imports
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) {}
  user: User;
  posts: Post[];
  comments: Comment[];

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

  fetchComments(postId: number) {
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get(commentsUrl).pipe(
      map(data => {
        return this.processCommentsResponse(data, postId);
      })
    );
  }

  processCommentsResponse(data, id) {
    return (this.comments = data.filter(comment => comment.postId === id));
  }
}
