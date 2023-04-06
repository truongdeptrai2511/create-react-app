import './App.css';
import Content from './Content'
import {useReducer} from 'react'

//init state
const initState = 0
// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Reducer
const reducer = (state, action) => {
  console.log('Reducer-run...') 
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default: 
      throw new Error('Invalid action')
  }
}
function App(){
    const [count, dispatch] = useReducer(
      reducer, initState
    )

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
    )
  }
//#endregion
export default App;
