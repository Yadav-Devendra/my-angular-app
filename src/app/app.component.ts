import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage: string = 'Hello from Parent!';

  title = 'my-angular-app';
  userName: string = '';

  constructor(private userService: UserService) {  // Inject the service
    this.userName = this.userService.getUserName(); // Get the current user name
  }

  changeUserName() {
    this.userService.setUserName('Jane Doe'); // Change the user name in the service
    this.userName = this.userService.getUserName(); // Update the displayed user name
  }
}
