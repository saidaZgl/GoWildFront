import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/User.service';



@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {
  isLoaded = false;
  data: any;
  constructor(private api: UserService) {
   }

  ngOnInit() {
    this.api.getUser().subscribe((response) => {
      this.data = response;
      this.isLoaded = true;
    });
  }

}
