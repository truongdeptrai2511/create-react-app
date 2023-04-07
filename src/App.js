import './App.css';
import Content from './Content'
import {useReducer, useRef} from 'react'

//init state
const initState = {
  job: '',
  jobs: [],
}
// Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (job) => {
  return {
    type: SET_JOB,
    payload: job
  }
}
const addJob = (job) => {
  return {
    type: ADD_JOB,
    payload: job
  }
}
const deleteJob = (id) => {
  return {
    type: DELETE_JOB,
    payload: id
  }
}
// Reducer
const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      }
    case ADD_JOB:
        newState = {
          ...state,
        jobs: [...state.jobs, action.payload],
        }
        break
    case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload, 1)
        newState = {
          ...state,
          jobs: newJobs
        }
        break
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
  return newState
}
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
