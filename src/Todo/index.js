import './App.css';
import Content from './Content'
import {useReducer, useRef} from 'react'
import {addJob, deleteJob, setJob} from './actions'
import reducer, {initState} from './reducer';

function App(){
    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state
    const inputRef = useRef()
    const handleAddJob = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus()
    }
    return (
      
      <div>
        <h1>To do</h1>
        <input 
          ref={inputRef}
          value={job}
          placeholder='Enter todo...'
          onChange={e => dispatch(
            {type: SET_JOB,
             payload: e.target.value})}
        />
        <button onClick={handleAddJob}>Add</button>
        <ul>
          {jobs.map((job,index) => (
            <li key={job.index}>{job} 
              <span>
                <button onClick={() => dispatch(deleteJob(job.id))}>X</button>
              </span></li>
          ))}
        </ul>
      </div>
    )
  }
//#endregion
export default App;
