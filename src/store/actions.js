import { ADD_TODO } from "./constants";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload
})
export const setTodoInput = (text) => ({
    type: SET_TODO_INPUT,
    payload
})