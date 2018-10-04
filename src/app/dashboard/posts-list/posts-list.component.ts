import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../../services/data-storage.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  userId: number = this.dataStorageService.user.id;
  posts: Post[] = [];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.fetchPosts(this.userId).subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
