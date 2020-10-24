import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CounterState } from '../store/reducers';
import { changeValueAction } from '../store/actions';

export function HomeScreen() {
  const counter = useSelector(({ Counter }: { Counter: CounterState }) => Counter);
  const dispatch = useDispatch();

  function counterAdd() {
    dispatch(changeValueAction(counter.value++));
  }
  function counterRemove() {
    dispatch(changeValueAction(counter.value--));
  }

  return (
    <>
      <Text testID="CounterTitle">Counter {counter.value}</Text>
      <TouchableHighlight onPress={counterAdd}>
        <Text>Add</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={counterRemove}>
        <Text>Remove</Text>
      </TouchableHighlight>
    </>
  );
}
