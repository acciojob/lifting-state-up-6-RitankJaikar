//comletely wrong cypress test

import React, { useState } from "react";
import './../styles/App.css';

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

export default App
