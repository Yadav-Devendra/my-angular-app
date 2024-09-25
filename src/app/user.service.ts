import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string = 'John Doe'; // This is the shared data

  // Method to get the user's name
  getUserName(): string {
    return this.userName;
  }

  // Method to set a new user name
  setUserName(newName: string) {
    this.userName = newName;
  }
}
