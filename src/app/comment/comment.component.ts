import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../services/get-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any;
  isLoaded = false;

  constructor( private api: GetServiceService ) {
  }

  ngOnInit() {
    this.api.getComments().subscribe((response) => {
      this.comments = response;
      console.log(this.comments);
      this.isLoaded = true;
    });
  }
}
