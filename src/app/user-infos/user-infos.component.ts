import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/User.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  user: any;

  constructor(private api: UserService) { }

  ngOnInit() {
  }

}
