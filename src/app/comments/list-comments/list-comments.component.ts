import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  comments: any;
  isLoaded = false;

  constructor( private api: CommentService ) {
  }

  ngOnInit() {
    this.api.getComments().subscribe((response) => {
      this.comments = response;
      this.isLoaded = true;
    });
  }
}
