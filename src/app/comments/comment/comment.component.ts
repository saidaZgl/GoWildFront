import { Component } from '@angular/core';
import { Comment } from '../../class/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {

  commentModel = new Comment(1, 'Ceci est un commentaire sur un événement', 7);

}
