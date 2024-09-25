import { Component } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css']
})
export class EventExampleComponent {
  message: string = 'Type something below:';

  // Method to handle input event
  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.message = `You typed: ${inputElement.value}`;
  }
}
