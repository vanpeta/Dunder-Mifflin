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
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.fetchComments(this.post.id).subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }

}
