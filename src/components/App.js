
import React, { useState } from "react";
import './../styles/App.css';
/*
import Child from "./Child";

const App = () => {
  const [todos, setTodos] = useState([
    {
      task: "Learn React",
      isComplete: false
    },
    {
      task: "Build React App",
      isComplete: false
    },
    {
      task: "Deploy the React app",
      isComplete: false
    }
  ]);

  return (
    <div>
        <div>Parent Component</div>
        <Child todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App;
*/


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Cypress" },
    { id: 3, text: "Build a Todo App" },
  ]);

  const handleComplete = (id) => {
    // Remove the todo with the specified ID
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
