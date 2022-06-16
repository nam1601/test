import { useReducer } from "react";
import {
    DELETE_TODO,
    SET_TODO_INPUT,
    SET_TODO_LIST,
    EDIT_TODO,
} from "./Constant";
const initState = {
    todos: [],
    todoInput: "",
};
function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT: {
            return {
                ...state,
                todoInput: action.payload,
            };
        }
        case SET_TODO_LIST: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }
        case DELETE_TODO: {
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodo,
            };
        }
        // case EDIT_TODO: {
        //     return {
        //         ...state,
        //         todo: action.payload,
        //     };
        // }
        default:
            throw new Error("Invalid action");
    }
}

export { initState };
export default reducer;
