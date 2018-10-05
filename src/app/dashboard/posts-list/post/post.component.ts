// angular imports
import { Component, OnInit, Input } from '@angular/core';
// services imports
import { DataStorageService } from '../../../../services/data-storage.service';
// models imports
import { Post } from '../../../../models/post.model';
import { Comment } from '../../../../models/comment.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.commentsUpdated.subscribe(comments => {
      comments.map(comment => {
        if (comment.filter(a => a.postId === this.post.id).length > 0) {
          return this.comments = comment.filter(a => a.postId === this.post.id);
        }
      });
    });
  }
}
