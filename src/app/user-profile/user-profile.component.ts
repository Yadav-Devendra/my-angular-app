import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = 'Jane Doe';
  userAge: number = 28;
  userEmail: string = 'jane.doe@example.com';
  userImage: string = 'https://via.placeholder.com/150';

  get ageCategory(): string {
    return this.userAge >= 30 ? 'Adult' : 'Young Adult';
  }

  get greetingMessage(): string {
    return `Hello, ${this.userName}!`;
  }
}
