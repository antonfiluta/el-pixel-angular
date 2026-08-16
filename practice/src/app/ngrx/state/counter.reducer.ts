import { createFeature, createReducer, on } from '@ngrx/store';
import { InitialCounterState } from './counter.state';
import { CounterActions } from './counter.action';

export const CounterFeature = createFeature({
  name: 'counter',
  reducer: createReducer(
    InitialCounterState,

    on(CounterActions.reset, (state) => ({
      ...state,
      count: 0,
    })),

    on(CounterActions.add, (state) => ({
      ...state,
      count: state.count + 1,
    })),

    on(CounterActions.minus, (state) => ({
      ...state,
      count: state.count - 1,
    })),
  ),
});
