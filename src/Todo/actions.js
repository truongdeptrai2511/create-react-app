import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'

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
