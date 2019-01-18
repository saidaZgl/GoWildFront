import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any;
  isLoaded = false;

  constructor( private api: CommentService ) {
  }

  ngOnInit() {
    this.api.getComments().subscribe((response) => {
      this.comments = response;
      console.log(this.comments);
      this.isLoaded = true;
    });
  }
}
