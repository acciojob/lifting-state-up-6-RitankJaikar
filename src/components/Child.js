import React from "react";

export default function Child({todos, setTodos}) {
    function handleComplete(index) {
        let updatedTodos = todos.map((todo, i) => {
            if(i === index) {
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <div>Child Component</div>
            <ul>
                {
                    todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                <span>{todo.task}</span>
                                <button onClick={() => handleComplete(i)}>Complete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}