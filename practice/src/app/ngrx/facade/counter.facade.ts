import { inject, Service } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../state/counter.selector';
import { CounterActions } from '../state/counter.action';

@Service()
export class CounterFacade {
  private store = inject(Store);

  public count = this.store.selectSignal(selectCount);

  public add() {
    this.store.dispatch(CounterActions.add());
  }

  public minus() {
    this.store.dispatch(CounterActions.minus());
  }

  public reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
