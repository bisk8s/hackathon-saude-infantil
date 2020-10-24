import { combineReducers, createStore } from 'redux';

import { CounterReducer } from './reducers';

const reducers = combineReducers({
  Counter: CounterReducer
});
const store = createStore(reducers);

export default store;
