import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
  userName: string = '';

  constructor(private userService: UserService) {  // Inject the service
  }

  ngOnInit(): void {
    this.userName = this.userService.getUserName(); // Get the user name from the service
  }

}
