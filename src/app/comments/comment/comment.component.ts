import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  public commentModel: Comment;

  constructor ( private commentService: CommentService ) {
  }

  ngOnInit() {
      this.commentModel = new Comment(1, 'Ceci est un commentaire sur un événement', 7);
      /* this.commentService.getCommentById(2).subscribe((response: any) => {
      this.commentModel = response;
      console.log(this.commentModel);
    });
    */
  }

}
