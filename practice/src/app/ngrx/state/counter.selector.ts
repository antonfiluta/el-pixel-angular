import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

// export const selectCount = CounterFeature.selectCount;
// можно и так

export const CounterSelector = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  CounterSelector,
  (state) => state.count,
);
