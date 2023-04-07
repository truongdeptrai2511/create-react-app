import './App.css'
import { useStore, actions } from './store';


function App(){

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
    return (
        <div className="App">
            <input 
              value={todoInput}
              placeholder='Enter a todo...'
              onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
        </div>
    )
  }
//#endregion
export default App;
