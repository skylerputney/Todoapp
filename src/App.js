import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import './App.css';

export default function App(){
    const [todo, setTodo] = useState([]);
    const todoInputRef = useRef(null);

    const addTodo = () => {
        const newTodo = todoInputRef.current.value;
        if (newTodo !== '') {
            setTodo([...todo, newTodo]);
            todoInputRef.current.value = '';
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = [...todo];
        updatedTodos.splice(index, 1);
        setTodo(updatedTodos);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>ToDo List</h1>
                <div className="todo-input">
                    <input type="text" ref={todoInputRef} placeholder="Enter a task to do" />
                    <button onClick={addTodo}>Add</button>
                </div>
                <ul className="todo-list">
                    {todo.map((todo, index) => (
                        <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                            {todo}
                            <span className="text-dark" onClick={() => removeTodo(index)}>x</span>
                        </li>
                    ))}
                </ul>
            </div>
            <footer>
                <p>Background Image by </p>
                <a href="https://www.freepik.com/free-photo/desktop-with-opened-organizer_2419952.htm#page=2&query=todo%20list%20horizontal&position=8&from_view=search&track=ais" rel="noopener noreferrer">Freepik</a>
            </footer>

        </div>
    );
};

