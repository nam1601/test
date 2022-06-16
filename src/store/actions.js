import {
    DELETE_TODO,
    EDIT_TODO,
    SET_TODO_INPUT,
    SET_TODO_LIST,
} from "./Constant";

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload: payload,
});
export const setTodoList = (payload) => ({
    type: SET_TODO_LIST,
    payload: payload,
});
export const editTodo = (payload) => ({
    type: EDIT_TODO,
    payload: payload,
});
export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: index,
});
