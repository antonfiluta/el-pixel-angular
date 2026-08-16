import { CounterFeature } from './counter.reducer';
import { CounterState } from './counter.state';

export interface AppState {
  counter: CounterState;
}

export const InitialAppState = {
  [CounterFeature.name]: CounterFeature.reducer,
};
