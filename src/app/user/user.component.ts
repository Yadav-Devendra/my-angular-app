import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    {
      name: 'Jane Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    },
    {
      name: 'John Smith',
      age: 32,
      email: 'john.smith@example.com',
      address: {
        street: '456 Elm St',
        city: 'Othertown',
        state: 'TX',
        zip: '67890'
      }
    },
    {
      name: 'Alice Johnson',
      age: 25,
      email: 'alice.johnson@example.com',
      address: {
        street: '789 Oak St',
        city: 'Differenttown',
        state: 'FL',
        zip: '54321'
      }
    }
  ];
}
