import { Component, OnInit } from '@angular/core';
import { CommentModel } from '../../models/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  isLoaded = false;
  public comment: CommentModel;

  constructor ( private commentService: CommentService ) {
  }

  ngOnInit() {
      // this.commentModel = new Comment(1, 'Ceci est un commentaire sur un événement', 7);
      this.commentService.getCommentById(2).subscribe((response: any) => {
      this.comment = response;
      this.isLoaded = true;
    });
  }

  onCreate() {
    this.comment.id = this.comment.liky = 0;
    this.comment.at_updated = this.comment.at_created = null;
    this.commentService.postComment(this.comment).subscribe((response: any) => {
      this.comment = response;
    });
  }

  onUpdate() {
    console.log('onUpdate function');
    this.commentService.putComment(this.comment).subscribe((response: any) => {
      this.comment = response;
    });
  }

  onDelete() {
    console.log('onDelete function');
    this.commentService.deleteComment(this.comment.id).subscribe((response: any) => {
      this.comment = response;
    });
  }

}
