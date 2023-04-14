import { useReducer } from 'react'

type StateType = {
  count: number;
}
type ResetAction = {
  type: 'reset'
}
type UpdateAction = {
  type: 'increment' | 'decrement';
  value: number;
}
// = discriminated union
type ActionType = ResetAction | UpdateAction;

const initialState = { count: 0 }

function reducer(state: StateType, action: ActionType){
  switch(action.type){
    case 'increment':
      return { count: state.count + action.value }
    case 'decrement': 
      return { count: state.count - action.value }
    case 'reset':
      return initialState;
    default: 
      return state;
  }
}

function ReducerStrictType() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <div>
      <strong>ReducerStrictType</strong>
      <span> count: { state.count } </span>
      <button onClick={() => dispatch({ type: 'increment', value: 10 })}>+ 10</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>- 10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default ReducerStrictType