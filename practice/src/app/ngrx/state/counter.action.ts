import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'counter',
  events: {
    reset: emptyProps(),
    add: emptyProps(),
    minus: emptyProps(),
  },
});
