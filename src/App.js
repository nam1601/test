import { useRef } from "react";
import "./App.css";
import { useStore, actions } from "./store";

function App() {
    const inputRef = useRef();
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const handleAdd = () => {
        dispatch(actions.setTodoList(todoInput));
        dispatch(actions.setTodoInput(""));
        inputRef.current.focus();
    };
    const handleEdit = (changeTodo) => {
        if (changeTodo.trim()) {
            dispatch(actions.editTodo(changeRef.current, changeTodo));
            changeRef.current = -1;
            dispatch(actions.setTodo(""));
        }
        inputRef.current.focus();
    };
    return (
        <div className="block">
            <div className="block-input">
                <div>
                    <input
                        className="input"
                        ref={inputRef}
                        value={todoInput}
                        placeholder="Enter todo..."
                        onChange={(e) => {
                            dispatch(actions.setTodoInput(e.target.value));
                        }}
                    />
                    <p className="input-message">Invalid value</p>
                </div>
                <button className="submit-btn" onClick={handleAdd}>
                    Add
                </button>
            </div>
            <div className="list">
                <h3 className="heading">Todo List</h3>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button
                                key={index}
                                className="edit-btn"
                                onClick={() => handleEdit(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="del-btn"
                                onClick={(index) => {
                                    return dispatch(actions.deleteTodo(index));
                                }}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
