import { Component, inject } from '@angular/core';
import { CounterFacade } from '../facade/counter.facade';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  public facade = inject(CounterFacade);
}
