import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>Counter: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `
})
export class CounterComponent {
  counter = signal(0);  // Create a signal with an initial value of 0

  constructor() {
    // Create an effect to run whenever the counter changes
    effect(() => {
      console.log(`Counter has changed: ${this.counter()}`);
    });
  }

  increment() {
    this.counter.update(value => value + 1);  // Increment the counter
  }

  decrement() {
    this.counter.update(value => value - 1);  // Decrement the counter
  }

}
