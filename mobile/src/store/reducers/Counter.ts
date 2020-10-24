export type CounterState = { value: number };

const DEFAULT_STATE: CounterState = { value: 0 };

export function CounterReducer(state: CounterState = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return { ...state, data: [state.value, action.value] };

    default:
      return state;
  }
}
