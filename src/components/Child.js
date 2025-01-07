import React from "react";

export default function Child({ todos, setTodos }) {
  function handleComplete(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isComplete: true } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <div>Child Component</div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span>{todo.task}</span>
            {!todo.isComplete && (
              <button onClick={() => handleComplete(i)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
