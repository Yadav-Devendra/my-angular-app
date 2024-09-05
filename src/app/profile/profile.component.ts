import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName: string = 'Jane Doe';
  userAge: number = 28;
  userEmail: string = 'jane.doe@example.com';
}
