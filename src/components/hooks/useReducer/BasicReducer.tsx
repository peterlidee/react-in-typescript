import { useReducer } from 'react';

type ReducerState = {
  count: number;
}
type ReducerAction = {
  type: 'increment' | 'decrement';
  value: number;
}

const initialState = { count: 0 };

function reducer(state: ReducerState, action: ReducerAction){
  switch(action.type){
    case 'increment':
      return { count: state.count + action.value }
    case 'decrement':
      return { count: state.count - action.value }
    default:
      return state;
  }
}

function BasicReducer() {
  
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <div>
      <strong>Basic Reducer</strong> <span>count: {state.count} </span>
      <button onClick={() => dispatch({ type: 'increment', value: 10 })}>add 10</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>subtract 10</button>
    </div>
  )
}

export default BasicReducer